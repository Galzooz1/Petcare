const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const Joi = require("joi");

let userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    date_created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String, default: "user"
    }
})

exports.UserModel = mongoose.model("users", userSchema);

//מייצר טוקן ייחודי
exports.genToken = (_id) => {
    let token = jwt.sign({ _id }, "oshriSecret", {expiresIn: "60mins"} );
    return token;
}

//ולדיזציה של נתונים
exports.validSignup = (_bodyUser) => {
    let joiSchema = Joi.object({
        firstName: Joi.string().min(2).max(15).required(),
        lastName: Joi.string().min(2).max(15).required(),
        email: Joi.string().min(8).max(100).email().required(),
        password: Joi.string().min(2).max(100).required(),
        role:Joi.string().allow('', null)
    })

    return joiSchema.validate(_bodyUser);
}

//Login
exports.validLogin = (_bodyUser) => {
    let joiSchema = Joi.object({
        email: Joi.string().min(8).max(100).email().required(),
        password: Joi.string().min(2).max(100).required()
    });

    return joiSchema.validate(_bodyUser);
}