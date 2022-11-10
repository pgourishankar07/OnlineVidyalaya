const {Client}=require('pg')                
const client=new Client({                   
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'123123',
    database:'onlinevidya'

})

client.connect()



//__________________PRO METHOD FOR GETTING DATA________________________
// ___(getting query from the user in the terminal using readline module)_______

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


var urquery;  
readline.question(`Enter query : `, q => {
    urquery= q;
    readline.close();
    console.log(urquery)
    client.query(urquery,(err,res)=>{
        if(!err){
            console.log(res.rows);
        }
        client.end();
    })
});
  
//__________________________________________

//____________NORMAL METHOD_________________



// client.query("select * from tab2",(err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     client.end();
// })