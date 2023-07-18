const app = require("express")(); //loaded module express + load object express.
const path = require('path'); // load module path.

app.get('/',(request, response)=>{
    rander(response, 'html/index.html');
});

app.get('/about',(request, response)=>{
    rander(response, 'html/about.html');
});

function rander(response, file){
    response.status(200);
    response.type('text/html');
    response.sendFile(path.join(__dirname, file));
}

app.use((request, response)=>{  // กรณีที่กำหนด Urlไม่ตรงกับ path เลย
    response.status(404);
    response.type('text/html');
    response.send('404 Not Found');
})

app.listen(8000, () => console.log('Server started!'));