'use strict';
//断言模块
const assert = require('assert');
// npm i supertest -D
const supertest = require('supertest');
// 拿到koa 会有层层引用关系
const app = require('../src/app');

// 全局函数 mochajs from egg-bin
describe('Restful demo application test', () => {
    describe('GET', () => {
        it('get should response 404', async () => {
            const user = {
                name: 'wowo',
                age: 23
            };
            let res = await supertest(app.callback())
                .post('/user')
                .send(user)
                .expect(201);
            const { _id } = res.body;
            res = await supertest(app.callback()).get(`/user/${_id}`).expect(200);
            assert(user.name === res.body.name);
            assert(user.age === res.body.age);
        });
        it('get should response 404', async () => {
            await supertest(app.callback())
                .get('/user/603cbf77bd96969')
                .expect(400);
        });
        
    });
});
