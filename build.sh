#! /bin/sh

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o sensorwindow
zip -r sensor.zip sensorwindow statics views
scp sensor.zip root@119.23.75.129:/root/apps/sensorwindow/
ssh root@119.23.75.129 'cd /root/apps/sensorwindow;rm -rf sensorwindow statics views conf; unzip sensor.zip;rm sensor.zip;supervisorctl restart sensorwindow' 
rm sensorwindow sensor.zip
# ssh root@192.168.22.251 'supervisorctl restart pingpp-async-service'