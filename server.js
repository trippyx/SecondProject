const express = require("express")
const app = express()
const port_number = process.env.port_number || 3000
const dbFile = require('./database.js')

app.use(express.json());


app.post('/postApi',(req,res)=>{
    try{
        var response = {}
        var statusCode = 400
        var message = "Success"
        if(req.query.access_token == "5tg6idqo2enskdls"){
            statusCode = 200
            response  = {data1:req.query,data2:req.query,data3:req.query}
        }else{
            message = "Failure"
            response = {}
        } 
        const dictionary = {data:response,message:message,status:statusCode}
        console.log("********Request Body*********",req.query)
        console.log("********Sent Response*********",dictionary)
        res.send(dictionary)
    }catch(error){
        console.log('error',error)
    }
})


app.get('/getApi',(req,res)=>{
    try{
        var response = {}
        var statusCode = 400
        var message = "Success"
        if(req.query.access_token == "5tg6idqo2enskdls"){
            statusCode = 200
            response  = {data1:req.query,data2:req.query,data3:req.query}
        }else{
            message = "Failure"
            response = {}
        } 
        const dictionary = {data:response,message:message,status:statusCode}
        console.log("******** Request Body *********",req.query)
        console.log("******** Sent Response *********",dictionary)
        res.send(dictionary)
    }catch(error){
        console.log('error',error)
    }
});



app.listen(port_number,async ()=>{
    const database = await dbFile.connectDatabase();
    global.database = database
    console.log("************ Server Started ***************")

})