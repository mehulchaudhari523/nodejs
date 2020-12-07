const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb_1";

// mongodb create db
MongoClient.connect(url,(err,db)=>{
    if (err) throw err;
    console.log('Db Created..!!');
    db.close();
});


