FROM nginx:alpine

COPY production/default.conf /etc/nginx/conf.d/

