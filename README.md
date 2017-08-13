# Dangx Project



# Services

* www-whoami
  * URL: http://whoami.dev
  * Port: 8000
* www-dangxproject
  * Project landing page, mostly static assets
  * Info
    * URL: http://dangxproject.dev
    * Port: 3000, Expose: 80
* www-api
  * NodeJS-based API
  * Info
    * URL: http://api.dangxproject.dev
    * Port: 3001, Expose: 80

# Notes

* Dnsmasq
  * Configured to only return queries for any host under "dev" eg: xxx.dev, api.dangxproject.dev on 127.0.0.1 IP address
  * command section in docker-compose.dnsmasq.yml and its manpage
* Docker vEthernet on Windows 10
  * Attach the following entries below to your Docker vEthernet IPv4 adapter:
    * DNS Server: 127.0.0.1
    * DNS Suffix: dev

# References

* Docker 2-way linking: https://medium.com/@yani/two-way-link-with-docker-compose-8e774887be41
* Docker Nginx Proxy: https://github.com/jwilder/nginx-proxy
* Docker Dnsmasq
  * https://hub.docker.com/r/andyshinn/dnsmasq/
  * http://www.thekelleys.org.uk/dnsmasq/doc.html
  * http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html

