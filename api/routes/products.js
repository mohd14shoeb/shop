const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling Get request product'
    });
});

router.post('/', (req, res, next) => {
 const product = {
     name: req.body.name,
     price: req.body.price
 };
    res.status(200).json({
        message: 'handling Post request product',
        creat: product
    });
});

router.get('/:productid', (req, res, next) =>{
    const id = req.param.productid;
    if (id === 'special'){
        res.status(200).json({
        message: 'you discovered special id',
        id: id
        });
    }else{
        res.status(200).json({
            message: 'you passed an id'
        });
    }

});

router.patch('/:productid', (req, res, next) =>{
res.status(200).json({
message: 'product updated successfully'
});

});

router.delete('/:productid', (req, res, next) =>{
    res.status(200).json({
    message: 'product deleted successfully'
    });
    
    });


module.exports=router;