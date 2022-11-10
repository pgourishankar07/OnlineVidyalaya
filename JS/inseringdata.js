const {Client}=require('pg')                
const client=new Client({                   
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'123123',
    database:'onlinevidya'

})

client.connect()



//__________________PRO METHOD FOR INSERTING DATA________________________
// ___(getting query from the user in the terminal using readline module)_______

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


var urquery;  
readline.question(`Enter query : `, q => {
    urquery= q;
    readline.close();
    client.query(urquery,(err,res)=>{
        if(!err){
            console.log("data inserted successfully.......");
        }
        client.end();
    })
});
  
//__________________________________________

//____________NORMAL METHOD_________________


// client.query("insert into student values(1,'Ram kumar',9772345987,'ramkumar@gmail.com','Artificial Intelligence')",(err,res)=>{
//     if(!err){
//         console.log("data inserted successfully........");
//     }
//     client.end();
// })


