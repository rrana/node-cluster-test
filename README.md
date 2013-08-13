node-clustering-test
=================

## Clone this project

## Node package installation
sudo npm install -g cluster
sudo npm install -g dateformat
sudo npm install -g forever

## Nginx installation
sudo apt-get install nginx

> Replace /etc/nginx.conf with nginx-conf/nginx.conf
> Replace /etc/nginx/sites-enabled/default with nginx-conf/default

# Run app with cluster
> Execute APP with two worker defined with CLUSTER_WORKERS=<number-of-workers>
sudo CLUSTER_WORKERS=1 node server.js &

## Run server.js with forever (OPTIONAL)
mkdir -p /var/log/cmc-log
sudo CLUSTER_WORKERS=2 forever start -e /var/log/cmc-log/err.log -o /var/log/cmc-log/out.log -a server.js

