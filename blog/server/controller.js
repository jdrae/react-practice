const path = require('path');

const AWS = require('aws-sdk');
AWS.config.loadFromPath(
    path.join(__dirname, 'config','awsConfig.json')
);

const model = require('./model');

module.exports = {
    needs: () => upload,
    api : { //연관된 컨트롤러들을 담는 키 역할
        // 모델에 접근할 수 있는 경로 설정
        getData : (req, res) => {
            model.api.getData(data=>{
                return res.send(data)
            })
        },
        addData : (req, res) => {
            let body = req.body

            model.api.addData( body, data => {
                return res.send(true)
            })
        },
        modifyData : (req, res) => {
            let body = req.body

            model.api.modifyData( body, data => {
                return res.send(true)
            })
        },
        deleteData : (req, res) => {
            let body = req.body

            model.api.deleteData( body, data => {
                return res.send(true)
            })
        },
    }
}

//외부에서 controller.api.getData 등으로 접근 -> 역할을 라우터에서 할당
