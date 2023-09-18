const app = require('express')(); //โหลดโมดูล ecxpress inculde สร้าง Objeect Express
const path = require('path'); //โหลดโมดูล path

app.use(function(request, response){
    response.status(200);
    response.type('text/html');
    response.sendFile(path.join(__dirname,'about.html'));
    // response.send('<!DOCTYPE html>
    // <head><title></title>
    // </head><body>
    // <ol>
    // <li>สร้างโฟลเดอร์ที่จัดเก็บแอป</li>
    // <li>ใช้คำสั่ง npm init -y</li>
    // </lo>
    // </body>
    // </html>');
});
app.listen(8008);
console.log('Server started on port:8008');
