const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// insert in collection
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db('mydb_1');
    var myobj = {name:'Test 2',address:'Add 2'};
    dbo.collection('customer').insertOne(myobj,(err,res)=>{
        if(err) throw err;
        console.log('Inserted...!');
        console.log(res);
        db.close();
    });
});