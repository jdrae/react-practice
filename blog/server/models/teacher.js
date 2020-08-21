/*
create table teacher(
    id int not null, //id를 지정하지 않아도 자동으로 id 부여
    name char(50),
    primary key(id)
);
*/

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'teacher', //table 이름
        {
            name: { // table 의 columnns
                type: DataTypes.STRING(50), //char, varchar 과 동일
                allowNull: true
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};
