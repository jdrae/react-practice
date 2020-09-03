const express = require('express');
const app = express();
const router = require('./route')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const sequelize = require('./models').sequelize;

sequelize.sync();
//sequelize.sync({force:true}); //모든 테이블의 모든 데이터 삭제

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/',router);


// 포트 할당
const PORT = process.env.PORT || 4000;


// 서버 응답 출력
// '/api/host' 로 보낸 요청은 무조건 'Darae'로 응답한다.
// 클라이언트(App.js)에서 'axios'를 이용하여 '/api/host'로 요청을 보낼 것임
app.get('/api/host', (req, res)=>{ 
    res.send({host: 'Darae\'s'});
})


// 서버 실행
app.listen(PORT, ()=>{
    console.log(`server on: http://localhost:${PORT}/`);
})
