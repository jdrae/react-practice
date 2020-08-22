blog tutorial from [https://blog.naver.com/sejun3278/](https://blog.naver.com/sejun3278/)

### How to start 

```
cd server
node server.js

cd blog
npm start
```

* Press `f12` and go `Network` tab to check the `host` file is in correct status. (Request URL: `http://localhost:3000/api/host`)


### To start server and client at once

1. install modules

```
npm install nodemon -g
npm install nodemon concurrently --save-dev
```

2. modify `package.json` file

```
  "scripts": {
    "server": "nodemon server/server.js",
    "dev": "concurrently \"nodemon server/server.js\" \"node scripts/start.js\"",
```


3. run

```
yarn dev
```


### Add RDS instance by AWS

[https://blog.naver.com/sejun3278/221569678512](https://blog.naver.com/sejun3278/221569678512)

## Relational Database

```
db.Teacher = require('./teacher')(sequelize, Sequelize);
db.Class = require('./class')(sequelize, Sequelize);
```

1. 1 to 1
```
db.Teacher.hasOne(db.class);
```
class 는 target 모델, teacher 는 source 모델
source 모델이 target 모델에 fk 제공
-> class 에 teacher column 생성

2. 1 to m
```
db.Teacher.hasMany(db.Class, {
  foreignKey: 'teacher_id',
  sourceKey: 'id'
});
db.Class.belongsTo(db.Teacher, {
  foreignKey: 'teacher_id',
  targetKey: 'id'
});
```
3. n to m
```
db.Teacher.belongsToMany(db.Class, {
  through : 'schedule',
  foreignKey: 'teacher_id'
});
db.Class.belongsToMany(db.Teacher,{
  through: 'schedule',
  foreignKey: 'class_id'
});
```
through 로 새로운 테이블을 생성하게 되며,
foreignKey 로 지정한 두 개의 column 이 생성된다.

## Query

```
//SELECT FROM * teachers
app.get('/get/data', (req, res) => {
    Teacher.findAll()
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 
```

```
//SELECT FROM * teachers WHERE name LIKE James
app.get('/get/data', (req, res) => {
    Teacher.findAll({
        where: { name : 'James' }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 
```

```
app.get('/get/data', (req, res) => {
    Teacher.findAll({
        where: { [Op.or]: [{ id : 1 }, { name : 'Alan' }] }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 
```

```
app.get('/get/data', (req, res) => {
    Teacher.findOne({
        where : { id : 2 }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 
```
`findAll` sends data in form of Array, while `findOne` send it by object type. So `findAll` can use `map` method, but `findOne` cannot. It requires exceptional code.