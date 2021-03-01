'use strict';
// 通常来说模型都是大写 因为要用new 关键字使用的

const mongoose = require('mongoose');

const Schema = {
    name: String,
    age: Number,
};

// 创建模型并导出
// User会对应到mongodb中users
module.exports = mongoose.model('User', Schema);