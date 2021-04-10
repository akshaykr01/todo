const mongoose = require('mongoose');

const mongodb = async()=>{
    try{
        //mongodb connection string

        const con = await mongoose.connect(process.env.mongo_uri,{useNewUrlParser:true,
        useUnifiedTopology:true, useFindAndModify:false,useCreateIndex:true});

        console.log("MongoDb connected");
    }catch(err)
    {
        console.log(err);
        process.emit(1);
    }
}


module.exports = mongodb;