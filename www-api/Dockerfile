FROM node:boron-alpine

LABEL maintainer="richard@mindginative.com"

WORKDIR /var/www/dangx

# Install Alpine packages
RUN apk update && \
    apk upgrade

ADD app.js app.js
ADD package.json package.json
ADD process.yml process.yml
ADD ./docker-cmd-start.sh /tmp/docker-cmd-start.sh
ADD routes routes

RUN npm install pm2 -g && \
    npm install
RUN chmod +x /tmp/docker-cmd-start.sh

EXPOSE 80

CMD ["/tmp/docker-cmd-start.sh"]
