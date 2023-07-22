// Create by Kurama250
// Github : https://github.com/Kurama250

const fs = require('fs');
const { spawn } = require('child_process');
const axios = require('axios');
const Tail = require('tail').Tail;

let config = {};
try {
  config = JSON.parse(fs.readFileSync('./config.json'));
} catch (error) {
  console.error('Error reading config.json file :', error);
  process.exit(1);
}

const failedLoginAttempts = {};
function startMonitoringRealTime() {
  const tail = new Tail('/var/log/auth.log');
  tail.on('line', (line) => {
    if (line.includes('Failed password')) {
      const ipMatch = line.match(/from (\d+\.\d+\.\d+\.\d+)/);
      if (ipMatch) {
        const ip = ipMatch[1];
        if (failedLoginAttempts[ip]) {
          failedLoginAttempts[ip]++;
        } else {
          failedLoginAttempts[ip] = 1;
        }
        if (failedLoginAttempts[ip] >= config.attemptsThreshold) {
          sendDiscordNotification(ip, failedLoginAttempts[ip]);
        }
      }
    }
  });
  tail.on('error', (error) => {
    console.error('Error while tailing the log file:', error);
  });
}

function sendDiscordNotification(ip, attempts) {
  const message = {
    embeds: [{
      title: 'SSH brute force attempt detected',
      description: `IP address ${ip} made ${attempts} SSH login attempts in a short time.`,
      fields: [{
        name: 'Time',
        value: new Date().toUTCString(),
      }],
      color: 0xff0000,
    }],
  };
  axios.post(config.discordWebhookUrl, message)
    .then(() => {
      console.log('Discord notification sent successfully.');
    })
    .catch((error) => {
      console.error('Error sending Discord notification :', error);
    });
}

console.log("Script start !");
startMonitoringRealTime();