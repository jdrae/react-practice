const sequelize = require('./models').sequelize;


// Teacher 테이블을 서버로 가져와 읽을 수 있도록
const {
    Board,
    Category,
    User,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

//외부에서 해당 모델로 접근할 수 있도록
module.exports = {
    api:{
        searchInfo: (body, hash, callback) =>{
            User.findAll({
                where: {[Op.and]: [{id: body.id, password: hash}]}
            })
            .then(data =>{
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        },
    },
    add:{
        board: (body, callback) =>{
            Board.create({
                title: body.title,
                contents: body.contents,
                date: new Date(),
                view_cnt: 0,
                cat_id: 0,
            })
            .then(data=>{
                callback(true)
            })
            .catch(err => {
                throw err;
            })
        },
        category: (body, callback)=>{
            Category.count({
                where: {name: body.name}
            })
            .then(cnt=>{
                if(cnt>0){
                    callback(false);
                } else{
                    Category.create({
                        name: body.name
                    })
                    .then(()=>{callback(true)})
                }
            })
        },
        user : (body, hash_pw, now, callback) => {
            User.count({
                where : { id : body.id }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                } else {
                    User.create({
                             admin : 'N',
                             id : body.id,
                             password : hash_pw,
                             name : body.name,
                             birthday : body.birthday,
                             sex : body.sex,
                             email : body.email,
                             signup_date : now
                    })
                    .then( () => callback(true) );
                }
            })
        }
    },
    // SELECT count(*) AS `count` FROM `boards` AS `board` 
    // WHERE `board`.`title` LIKE '%sejun3278%' AND `board`.`contents` LIKE '%sejun3278%';
    get:{
        board:(body, callback)=>{
            let search = "%%";
            if(body.search){
                search = '%'+body.search+'%';
            }
            
            Board.findAll({
                where:{
                    title:{
                        [Op.like]: search
                    },
                    contents:{
                        [Op.like]:search
                    },
                    cat_id: body.category
                },
                limit: (body.page * body.limit),
                offset: (body.page - 1) * body.limit,
                order: sequelize.literal('board_id DESC')
            })
            .then(data=>{
                callback(data)
            })
            .catch(err=>{
                throw err;
            })
        },
        board_cnt:(body, callback)=>{
            let search = "%%";
            if(body.search){
                search = "%" + body.search + "%";
            }
            Board.count({
                where:{
                    title:{
                        [Op.like]: search
                    },
                    contents:{
                        [Op.like]: search
                    },
                    cat_id: body.category
                }
            })
            .then(result=>{
                callback(result);
            })
        },
        board_data:(body, callback)=>{
            Board.findAll({
                where: {board_id: body.id}
            })
            .then(result=>{
                callback(result);
            })
            .catch(err=>{
                throw err;
            })
        },
        category:(callback)=>{
            Category.findAll()
            .then(result => {callback(result);})
            .catch(err=>{throw err;})
        }
    },
    update:{
        view_cnt:(body, callback)=>{
            Board.update({view_cnt: sequelize.literal('view_cnt+1')}, {
                where: {board_id: body.id}
            })
            .then(data => {
                callback(true)
            })
            .catch(err =>{
                throw err;
            })
        }
    },
    delete:{
        category: (body, callback)=>{
            Category.destroy({
                where: {id: body.id}
            })
            .then(()=>{
                Board.update({cat_id: 0},{
                    where: {cat_id: body.id}
                })
                .then(()=>{callback(true)})
                .catch(err => {throw err;})
            })
            /* 하위 게시글 전부 삭제
            .then(()=>{
                Board.destroy({
                    where: {cat_id: body.id}
                })
                .then(()=>{callback(true)})
                .catch(err=>{throw err;})
            })*/
        }
    },
    modify : {
        category : (body, callback) => {
            Category.count({
                where : { name : body.name }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                    
                } else {
                    Category.update({ name : body.name }, {
                        where : { id : body.id }
                    })
                    .then( () => { callback(true) })
                    .catch(err => { throw err; })
                }
            })
        }
    },
}