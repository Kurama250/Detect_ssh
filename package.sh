#!/bin/bash
# package.sh by Kurama250
# Github : https://github.com/Kurama250

apt update && apt upgrade -y
apt install npm node.js zip -y
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - &&\
apt-get install -y nodejs -y
npm install fs child_process axios tail
npm install pm2 -g