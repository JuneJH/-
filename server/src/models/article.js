const { DataTypes } = require('sequelize');
const sequelize = require("../db/index");

const Article = sequelize.define('Article', {
    // 在这里定义模型属性
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    viewCounts:{
        type:DataTypes.BIGINT,
        allowNull: false
    },
    tags:{
        type:DataTypes.STRING
    }
}, {
    // 这是其他模型参数
});
Tag.sync({ force: true }).then(()=>{
    console.log("用户模型表刚刚(重新)创建！");
});
module.exports = Tag;