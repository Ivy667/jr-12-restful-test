'use strict';
// MVC模型 --- 创建Model
// 负责启动连接的工作并且把整个module导出
// 连接mongodb

const mongoose = require('mongoose');
const UserModel = require('./User');

mongoose.connect('mongodb://127.0.0.1:27017/jr-13', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 由于经常到处不止一个model所以使用对象的形式
module.exports = {
    UserModel, 
};