FROM nginx:alpine

WORKDIR /var/www/html

COPY ./frontend/build .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80