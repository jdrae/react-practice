const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser')
const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// Teacher 테이블을 서버로 가져와 읽을 수 있도록
const {
    Teacher,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

// 포트 할당
const PORT = process.env.PORT || 4000;


// 서버 응답 출력
// '/api/host' 로 보낸 요청은 무조건 'Darae'로 응답한다.
// 클라이언트(App.js)에서 'axios'를 이용하여 '/api/host'로 요청을 보낼 것임
app.get('/api/host', (req, res)=>{ 
    res.send({host: 'Darae\'s'});
})

app.get('/api/test', (req,res) => {
    db.query("select * from t1", (err,data) => {
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/add/data', (req,res)=>{
    console.log(req.body)

    Teacher.create({ //INSERT INTO teacher(`id`, `name`) VALUES ('1',req.body.data)
        name : req.body.data //name 컬럼에 req.body.data 값추가
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        throw err;
    })

})

app.get('/get/data', (req, res) => {
    Teacher.findAll() // SELECT FROM * teachers
    .then(result=>{res.send(result)})
    .catch(err =>{throw err})
})

// 서버 실행
app.listen(PORT, ()=>{
    console.log(`server on: http://localhost:${PORT}/`);
})
