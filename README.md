<h1 align="center">Brutforce (ssh) attack detection code for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

# Tutorial to install the script ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- First, download and upload the codes to your server !

- After :

```shell script
chmod +x package.sh
bash package.sh
```
<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm node.js git
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - &&\
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

<h1 align="center">Then it's the end you have started the script have fun !</h1>
