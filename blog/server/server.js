const express = require('express');
const path = require('path');
const app = express();

// 포트 할당
const PORT = process.env.PORT || 4000;

// 서버 응답 출력
app.get('/', (req, res)=>{
    res.send('hi world');
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