const express = require('express')
const bcrypt = require("bcrypt");
const _ = require("lodash");
const router = express.Router();
const { UserModel, validSignup, validLogin, genToken } = require('../models/userModel');

router.post('/signup', async(req, res) => {
    let validBody = validSignup(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let user = new UserModel(req.body);
        //מגדירים רמת אבטחה
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.status(201).json(_.pick(user, ["_id","role", "email", "firstName", "lastName", "date_created"]));
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

//GET users listing, only by admin
router.get('/', async (req, res) => {
    let perPage = (req.query.perPage) ? Number(req.query.perPage) : 10;
    let page = (req.query.page) ? Number(req.query.page) : 0;
    let sortQ = (req.query.sort) ? req.query.sort : "_id";
    let ifReverse = (req.query.reverse == "yes") ? -1 : 1;
    try {
      // let data = await UserModel.find({},{email:1,name:1})
      // הפרמטר השני בעצם פילטר איזה מאפיינים להציג
      //  0 -> רק לא להציג אותו
      // 1 -> רק להציג אותו
      let data = await UserModel.find({}, { password: 0 })
      .sort({[sortQ]:ifReverse})
      .limit(perPage)
      .skip(page * perPage)
      res.json(data);
    }
    catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

//Login to system and get Token
router.post("/login", async (req, res) => {
    let validBody = validLogin(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      // קודם בודק שבכלל קיים יוזר עם האימייל הנל
      let user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ msg: "User Invalid!" });
      }
      let validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) {
        return res.status(400).json({ msg: "Password Invalid!" });
      }
      let myToken = genToken(user._id);
      res.json({ token: myToken });
    }
    catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  })

module.exports = router;