FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=s3cr3t

ADD schema.sql /docker-entrypoint-initdb.d

# sudo docker run -d --name mysql1 -v /mount_dir_on_host:/var/lib/mysql -e MYSQL_DATABASE="testdata" -e MYSQL_ROOT_PASSWORD=devpassword mysql:latest
