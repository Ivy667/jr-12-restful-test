'use strict';

const {
   userCtl,
} = require('../controller/index.js'); 
 
const { objectIdValidation } = require('../middleware/');

module.exports = (router) => {
    // 路由注册
    // single 
    // 路由匹配后(/user/:id) 先进入objectValidation中间件，然后再进入getUser
    router.get('/user/:id', objectIdValidation ,userCtl.getUser);
    router.post('/user', userCtl.createUser);
    router.put('/user/:id', objectIdValidation, userCtl.updateUser);
    router.delete('/user/:id', objectIdValidation, userCtl.deleteUser);

    // batch
    router.get('/batch/user',  userCtl.batchGetUser);
    router.post('/batch/user',  userCtl.batchCreateUser);
    router.put('/batch/user',  userCtl.batchUpdateUser);
    router.delete('/batch/user/:ids',  userCtl.batchDeleteUser);
    // list 
    router.get('/user', userCtl.listUser);
}

