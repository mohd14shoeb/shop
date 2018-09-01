
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRouter = require('./api/routes/products');
const orderRouter = require('./api/routes/orders');
const userRouter = require('./api/routes/users');


//handling Request

app.use('/products', productRouter);
app.use('/orders',orderRouter);
app.use('/users',userRouter);

app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) =>{
// res.header("Access-Control-Allow-Origin","*");
// res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept, AuthorizaTION");
// if (req.method == 'OPTIONS'){
//     res.header('Access-Control-Allow-Method', 'PUT', 'POST', 'DELETE', 'PATCH')
//     return res.status(200).json({});
// }
// next();
// });



app.use((req, res, next) => {
    const error= new Error('not found');
error.status = 404;
next(error);
});

app.use((error, req, res, next) => {
res.status(error.status || 500);
res.json({
    error:{
        message: error.message
    }
});
});

// app.use((req, res, next) => {
// res.status(200).json({
//     message:'it work'

// });
// });
module.exports = app;