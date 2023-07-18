const app = require('express')(); //โหลดโมดูล ecxpress inculde สร้าง Objeect Express
const path = require('path'); //โหลดโมดูล path
const fs = require('fs'); //โหลดโมดูล fs

app.use(function(request, response){
    
    response.status(200);
    response.type('text/html');
    response.sendFile(path.join(__dirname,'index.html')); // การอ่านไฟล์ indes.html
    
    // หากต้องการใช้โมดูล fs ของ Node ทำได้ดังนี้
    fs.readFile('index.html',(error, content)=>{
        if(!error){
            response.status(200);
            response.status(content);
        }else{
            response.status(404);
            response.status(error.message);
        }
    })
});

app.listen(8888);
console.log('Server started on port:8888');