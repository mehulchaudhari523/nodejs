const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// find in collection
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbo = db.db('mydb_1');
    var myobj = {name:'Test 2'};
    // Find documents where the address starts with the letter "S"
    // var query = { address: /^S/ };
    dbo.collection('customer').find(myobj).toArray((err,res)=>{
        if(err) throw err;
        console.log('Find...!');
        console.log(res);
        db.close();
    });
});