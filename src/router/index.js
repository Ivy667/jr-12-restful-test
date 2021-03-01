'use strict';

// import router
const Router = require('koa-router');

// create router
const router = new Router();

// 把router当做参数传给 router 
require('./user')(router);

// restful API
module.exports = router;