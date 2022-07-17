const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'miniostorage'
});

// var file = '/home/kazimuktadir/Downloads/bud-helisson-kqguzgvYrtM-unsplash.jpg';

    // var metaData = {
    //     'Content-Type': 'application/octet-stream',
    //     'X-Amz-Meta-Testing': 1234,
    //     'example': 5678
    // };

    // minioClient.fPutObject('ok-ish', 'test.jpg', file, metaData, function(err, etag) {
    //     if (err) return console.log(err)
    //     console.log('File uploaded successfully.')
    // });

module.exports = () => { minioClient };