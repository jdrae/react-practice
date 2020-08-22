const sequelize = require('./models').sequelize;


// Teacher 테이블을 서버로 가져와 읽을 수 있도록
const {
    Teacher,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

//외부에서 해당 모델로 접근할 수 있도록
module.exports = {
    api:{
        getData: callback => { //??
            Teacher.findAll()
            .then(result => {callback(result)})
            .catch(err => {throw err})
        },
        
        addData: (body, callback) => {
            Teacher.create({ //INSERT INTO teacher(`id`, `name`) VALUES ('1',req.body.data)
                name : body.data 
            })
            .then(result => {
                callback(result)//instead of 'res.send(result)'
            })
            .catch(err => {
                console.log(err)
                throw err;
            })
        },
        
        modifyData: (body,callback) => { 
            Teacher.update({name: body.modify.name},{
                where:{id: body.modify.id}
            })
            .then(result=>{callback(result)})
            .catch(err => {throw err})
        },
        
        deleteData: (body,callback) => { 
            Teacher.destroy({
                where:{id:body.delete.id}
            })
            .then(callback(true)) //instead of 'res.sendStatus(200)'
            .catch(err=>{throw err})
        }
    }
}