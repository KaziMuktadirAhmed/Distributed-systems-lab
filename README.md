Hello this is the first commit for the distributed systems lab repository

Databaser server staring commands

# mongodb

`sudo service mongod start` <br>
`sudo service mongod status`

# minio
`sudo touch minio-storage`
`sudo MINIO_ROOT_USER=minio MINIO_ROOT_PASSWORD=miniostorage minio server minio-storage --console-address ":9001"`