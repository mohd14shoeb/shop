const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling Get request order'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        orderid: req.body.orderid,
        quantity: req.body.quantity
    };
    res.status(200).json({
        message: 'handling Post request order',
        creat: order
    });
});

router.get('/:orderId', (req, res, next) =>{
    const id = req.param.orderId;
    if (id === 'special'){
        res.status(200).json({
        message: 'you discovered special orderid',
        id: id
        });
    }else{
        res.status(200).json({
            message: 'you passed an id',
            id: req.param.orderId
        });
    }

});

router.patch('/:orderId', (req, res, next) =>{
res.status(200).json({
message: 'order updated successfully'
});

});

router.delete('/:orderId', (req, res, next) =>{
    res.status(200).json({
    message: 'order deleted successfully'
    });
    
    });


module.exports=router;