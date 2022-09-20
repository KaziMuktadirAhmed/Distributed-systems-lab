const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: 'storyobjectdb',
    port: 9000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'miniostorage'
});

minioClient.makeBucket('story-fb', 'us-east-1', function(err) {
    if (err) return console.log('Error creating bucket.', err)
    console.log('Bucket created successfully in "us-east-1".')
});

// console.log(minioClient)
  
module.exports = minioClient;