const path = require('path');

const AWS = require('aws-sdk');
AWS.config.loadFromPath(
    path.join(__dirname, 'config','awsConfig.json')
);

const model = require('./model');

const hashing = require(path.join(__dirname, 'config', 'hashing.js'))
const salt = require(path.join(__dirname, 'config', 'db.json')).salt

module.exports = {
    needs: () => upload,
    api : { 
        sendPw : (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt)
            // console.log('salt 값 : ' , salt)
            // console.log('hash 결과 : ', hash)

            model.api.searchInfo(body, hash, result => { 
                var obj = {};
                if(result[0]){
                    obj['suc'] = true;
                    obj['msg']='로그인 성공'
                } else{
                    obj['suc'] = false;
                    obj['msg'] = '로그인 실패'
                }
                res.send(obj);
            })
        },
    }
}

