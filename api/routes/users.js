const Joi = require('joi');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling Get request for users'
    });
});

router.post('/', (req, res, next) => {
const schema = {
    userId: Joi.string().min(1).required()

};

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error);
        return;
    }

    const order = {
        userId: req.body.userId,
        userName: req.body.userName
    };
    users.push(order);
    res.send(users);
    // res.status(200).json({
    //     message: 'handling Post request users',
    //    // creat: order
    // });
});

module.exports=router;