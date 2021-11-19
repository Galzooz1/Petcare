const jwt = require("jsonwebtoken");
const {config} = require("../config/secretData");
const { UserModel } = require("../models/userModel");

//בדיקת טוקן ליוזר
exports.authToken = (req, res, next) => {
    let token = req.header("auth-token");
    if(!token){
        res.status(400).json({msg:"You must send token!"})
    }
    try {
        //קידוד לאובייקט שאנחנו נוכל לדבר איתו, שהיה שמור בהצפנה של הטוקן
        let decodeToken = jwt.verify(token,`${config.jwtSecret}`);
        //מייצר מאפיין חדש עם המידע של היוזר
        req.userData = decodeToken;
        //מצליחים ועוברים לפונקציה הבאה
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({msg:"Token invalid or expired"});
    }
}

//בדיקה אם הרול של היוזר הוא וטרינר
exports.authTokenVet = async(req, res, next) => {
    try {
        let user = await UserModel.findOne({_id: req.userData._id})
        if(user.role != "vet"){
            return res.status(401).json({msg:"You must be vet!"});
        }
        next();
    } catch (err) {
        console.log(err)
        res.status(401).json({msg:"error in vet auth"})
    }
}