const express = require('express');
const path = require('path');
const app = express();

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

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000);