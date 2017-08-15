#!/bin/bash

docker-compose  \
    -f docker-compose.yml \
    -f ./docker/dnsmasq/docker-compose.yml \
    -f ./docker/nginx-proxy/docker-compose.yml \
    -f ./docker/www-public/docker-compose.yml \
    -f ./docker/www-api/docker-compose.yml \
    up -d
