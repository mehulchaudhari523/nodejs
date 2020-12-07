const mysql = require('mysql');

// mysql crud
var conn = mysql.createConnection({
    host:'localhost',
    user:'sammy',
    password:'123',
    database:'test'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Connected..!!');
    //var sql = "INSERT INTO `test`.`users` (`user_id`, `full_name`, `email`, `password`) VALUES (NULL, 'mehul chaudhari', 'mehulchaudhari523@gmail.com', '123456');";
    //var sql = "INSERT INTO `test`.`users` (`user_id`, `full_name`, `email`, `password`) VALUES ?";
    var values = [
        [0,'test user','tets@gmail.com','123456'],
    ];
    var sql = 'SELECT * FROM users';
    //conn.query(sql,[values],(err,result)=>{ // when insert multiple
    //var sql = "DELETE FROM users where user_id = 3";
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});