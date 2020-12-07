const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// create collection
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db('mydb_1');
    dbo.createCollection("customers",(err,res)=>{
        if(err) throw err;
        console.log('Collection Created..!');
        db.close();
    });
});