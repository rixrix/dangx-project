FROM node:boron-alpine

LABEL maintainer="richard@mindginative.com"

WORKDIR /var/www/dangx

# Install Alpine packages
RUN apk update && \
    apk upgrade

ADD ../../www-api/app.js app.js
ADD ../../www-api/package.json package.json
ADD ../../www-api/process.yml process.yml
ADD ./start.sh /tmp/start.sh
ADD ../../www-api/routes routes

RUN npm install pm2 -g && \
    npm install
RUN chmod +x /tmp/start.sh

EXPOSE 80

CMD ["/tmp/start.sh"]
