const mongo = require('mongoose')
exports.connectDatabase = connectDatabase

async function connectDatabase(){
    try{
    const db = await mongo.connect('mongodb+srv://admin:8894910713@main.dns1hyd.mongodb.net/?retryWrites=true&w=majority')
    console.log('********** Database Connected ***************')
    return db
    }catch(error){
        console.log('************* Database error **************',error)
        process.exit(1)
    }
}
