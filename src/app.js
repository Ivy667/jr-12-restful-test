'use strict';

// import Koa and bodyParser
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// /../ 引用目录自动找到router文件夹
const router = require('./router/index.js');

// 建立Koa
const app = new Koa();

// 注册中间件(全局中间件)
app.use(bodyParser());
app.use(router.routes());

module.exports = app;