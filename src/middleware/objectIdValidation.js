'use strict';

const mongoose = require('mongoose');

// 对objectid格式进行校验
module.exports = async (ctx, next) => {
    try {
        // 验证id能否生成可以通过的id, 能则是对的格式，否则错误
        const { id } = ctx.params;
        const objectId = new mongoose.Types.ObjectId(id);
        ctx.objectId = objectId;
        await next();
    } catch (err) {
        ctx.throw(400, {
            message: err.message,
        });
    }
};