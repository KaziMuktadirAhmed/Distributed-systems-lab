const axios = require('axios');
const fs = require('fs');
    
const servURL = "http://service2:1111/api/service2";

module.exports.getData = async (req, res, next) => {
    let responseFromDifferentService =  await axios.get(servURL)
    .catch(error=> {
        console.log("error: ", error);
    });
    let data = [...responseFromDifferentService.data]
    //console.log(data);
    let file = fs.createWriteStream("my_file.txt");
    
    file.on('error', (err) => {
        console.log(err);
    })

    data.forEach(function (d) {
        file.write(d+'\n')
    });
    file.end();
    res.json(data);
}

module.exports.writeData = (req, res, next) => {
    data.push(req.body);
    
    res.json(data);
}


