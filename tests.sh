#!/bin/bash

# Trigger deployment
echo 'Starting deployment...'
curl -s 'https://forge.laravel.com/servers/95687/sites/413691/deploy/http?token=$DEPLOY_TOKEN';
echo 'Deployment triggered!'
