#!/bin/bash
cd /home/ec2-user/src/aarc/production
sudo /usr/local/bin/docker-compose down
sudo /usr/local/bin/docker-compose build
sudo /usr/local/bin/docker-compose up -d
