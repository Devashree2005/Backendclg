const fs=require('fs')
 fs.readFile('./sample.json','utf-8',(err,data)=>{
   if(err){
    console.log("Cantnot open the file");
    return
   }
   console.log(JSON.parse(data));

 });
 