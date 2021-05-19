const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('personalBlog', 'root', 'root', {
    host: '121.36.51.141',
    port:"3306",
    dialect: "mysql"
});
async function  init(){

    try {
        await sequelize.authenticate();
        console.log('数据库链接成功');
    } catch (error) {
        console.error('数据库链接失败:', error);
    }
}
init();

module.exports = sequelize;