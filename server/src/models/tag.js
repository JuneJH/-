const { DataTypes } = require('sequelize');
const sequelize = require("../db/index");

const Tag = sequelize.define('Tag', {
    // 在这里定义模型属性
    tagName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // 这是其他模型参数
});
Tag.sync({ force: true }).then(()=>{
    console.log("用户模型表刚刚(重新)创建！");
});
module.exports = Tag;