const sequelize = require('./models').sequelize;


// Teacher 테이블을 서버로 가져와 읽을 수 있도록
const {
    Admin,
    Board,
    Category,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

//외부에서 해당 모델로 접근할 수 있도록
module.exports = {
    api:{
        searchInfo: (body, hash, callback) =>{
            Admin.findAll({
                where: {[Op.and]: [{user_id: body.id, password: hash}]}
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
    }
}