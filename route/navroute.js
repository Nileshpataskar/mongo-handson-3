const { insert, fetchdata, deletedata, fetchStream, fetchStreamParams, insertMany, salary, graduated, salarybetween, deletesome } = require('../controller/employee');

const navroute=require('express').Router();


navroute.post('/insert',insert)
//handson
navroute.post('/insertmany',insertMany)
navroute.get('/salary',salary)
navroute.get('/graduated',graduated)
navroute.get("/sb",salarybetween)


navroute.post('/delete',deletesome)

//end
navroute.get('/fetch',fetchdata)
navroute.get('/fetchstream',fetchStream)
navroute.get('/fetchstreamparam/:yearGrad',fetchStreamParams)



// experience,
//   salary,
//   graduated,
//   salarybetween,
//   deletesome,


module.exports=navroute