#!/bin/bash
################
#    STEP 0    # Update ubuntu and install all the necessary packages
################
sudo apt-get update
sudo apt-get install -y git
sudo apt install -y apache2

################
#    STEP 1    # clone the repository and copy web files
################

# Pull the latest changes from the repository
git clone -b dist --single-branch git@github.com:MariaHendrikx/mariahendrikx.github.io.git

# Navigate into the project directory
cd mariahendrikx.github.io

# Copy everything from this folder to /var/www/html
sudo cp -r ./* /var/www/html

################
#    STEP 2    # HTTPS
################

# install certbot and install
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d your_domain -d mariahendrikx.eu -d www.mariahendrikx.eu
sudo systemctl restart apache2