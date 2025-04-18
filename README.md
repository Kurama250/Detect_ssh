<h1 align="center">Brutforce (ssh) attack detection code for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

<p align="center">
  <img src="https://img.shields.io/github/stars/Kurama250/Detect_ssh">
  <img src="https://img.shields.io/github/license/Kurama250/Detect_ssh">
  <img src="https://img.shields.io/github/repo-size/Kurama250/Detect_ssh">
  <img src="https://img.shields.io/badge/stability-stable-green">
</p>

<p align="center">  
  <img src="https://img.shields.io/npm/v/module-name">
  <img src="https://img.shields.io/npm/v/axios?label=axios">
  <img src="https://img.shields.io/npm/v/tail?label=tail">
  <img src="https://img.shields.io/npm/v/child_process?label=child_process">
  <img src="https://img.shields.io/npm/v/fs?label=fs">
</p>

# Tutorial to install the script ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Kurama250/Detect_ssh/main/setup.sh)
```

<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Detect_ssh.git
cd Detect_ssh/
npm install fs child_process axios tail
npm install pm2 -g
```

## 2 - on Terminal

```shell script
nano config.json
```

## And you also change this line :

```json
You can modify this line for the rate limit !
  "attemptsThreshold": 5,

Modify "YOUR WEBHOOK" by your webhook link !
  "discordWebhookUrl": "YOUR_WEBHOOK"
```

After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start main.js -n Detect-ssh
```

- Demo : 

![alt text](https://github.com/Kurama250/Detect_ssh/blob/main/ssh.png)

<h3 align="center"><strong>Support on Discord :</strong> <a href="https://discord.gg/6aebQGdDxB">Discord</a></3>
<h3 align="center">If you like this repository don't hesitate to give it a star ⭐ !</h3>
<h1 align="center">Then it's the end you have started the script have fun !</h1>
