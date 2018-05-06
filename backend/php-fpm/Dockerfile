FROM php:7.1.9-fpm

MAINTAINER Rodolfo Adhenawer Moraes <adhenawer@gmail.com>

ENV COMPOSER_HOME=$HOME/composer

RUN apt-get update && apt-get install -y libmcrypt-dev zip unzip git mysql-client \
    && docker-php-ext-install mcrypt pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/bin/composer && \
    chmod +x /usr/bin/composer

WORKDIR /var/www