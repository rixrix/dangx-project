#!/bin/bash

docker-compose  \
    -f docker-compose.yml \
    -f docker-compose.dnsmasq.yml \
    -f docker-compose.nginx-proxy.yml \
    -f docker-compose.www-whoami.yml \
    -f docker-compose.www-dangxproject.yml \
    -f docker-compose.www-api.yml \
    up -d
