'use strict';
// 导入userModel
const{ UserModel } = require('../model/')
const mongoose = require('mongoose');
const User = require('../model/User');

async function getUser(ctx) {
    // id 在params中 _id 
    const { objectId } = ctx; 
    const { id } = ctx.params;
    // 转换成objectId
    // 进入mongodb 做查询
    const res = await UserModel.findOne({ _id: objectId });
    if(!res) {
        ctx.body = {
            message: `${id} not found`, // 通常不会直接写字符串，而是用结构化的json信息，方便未来加更多信息
        };
        ctx.status = 404;
    } else {
        ctx.body = res;
    }
}

async function createUser(ctx) {
    const { body } = ctx.request;
    const user = new UserModel(body);
    const res = await user.save();
    ctx.body = res;
    ctx.status = 201;
}

async function updateUser(ctx) {
    const { objectId } = ctx; 
    const { id } = ctx.params;
    const { body } = ctx.request;
    const { n } = await UserModel.updateOne({ _id: objectId}, {$set: body});
    // 更新成功n就是0
    if (n === 0) {
        ctx.body = {
            message: `${id} not found`
        }
    } else {
        ctx.body = {
            message: `${id} updated!`,
        };
    }
}

async function deleteUser(ctx) {
    const { objectId } = ctx; 
    const { id } = ctx.params;
    const { n } = await UserModel.deleteOne({
        _id: objectId
    });
    if (n === 0) {
        ctx.body = {
            message: `${id} not found`
        }
    } else {
        ctx.body = {
            message: `${id} updated!`,
        };
    }
}

async function batchGetUser(ctx) {
    const { id } = ctx.query;
    console.log(id)
}

async function batchCreateUser(ctx) {}

async function batchUpdateUser(ctx) {}

async function batchDeleteUser(ctx) {}

// 分页接口
// 127.0.0.1:3000/user?page=1&pageSize=10
async function listUser(ctx) {
    let { page, pageSize } = ctx.query;
    // 转换成数字
    page = +page;
    pageSize = +pageSize;
    const skip = pageSize * (page - 1); 
    const res = await UserModel.find().skip(skip).limit(pageSize);
    const count = await UserModel.count();
    ctx.body = {
        results: res,
        count,
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    batchGetUser,
    batchCreateUser,
    batchUpdateUser,
    batchDeleteUser,
    listUser,
};