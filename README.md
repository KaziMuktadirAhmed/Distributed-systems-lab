Hello this is the first commit for the distributed systems lab repository

Databaser server staring commands

# Mongodb
This is a NoSQL database server for storing user data from login and registration. Also users post data in the mongodb server.

## `sudo service mongod start` 
Starts the mongodb service
## `sudo service mongod status`
Shows the current status of mongodb service 
# MinIO
Database server for object storage. Used for storing images form the application.

## `sudo touch minio-storage`
Checks if there is a folder named minio-storage in the home directory <br>
If not then creates a folder named minio-storage in home directory.
## `sudo MINIO_ROOT_USER=minio MINIO_ROOT_PASSWORD=miniostorage minio server minio-storage --console-address ":9001"`
Starts the minio loacl server at port 9000. <br>
Set the minio-storage folder name to a diffrent path for changing the local storage directory. <br>
Set the console-address to diffrent port no to host the server in a diffrent port. 