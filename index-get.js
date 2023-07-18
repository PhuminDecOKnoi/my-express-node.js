const app = require("express")(); //loaded module express + load object express.
const path = require('path'); // load module path.

function rander(response, file){ // function rander(){}
    response.status(200);
    response.type('text/html');
    response.sendFile(path.join(__dirname, file));
}

app.get('/',(request, response)=>{ // app.get() - index.html
    rander(response, 'html/index.html');
});

app.get('/about',(request, response)=>{ // app.get() - about.html
    rander(response, 'html/about.html');
});

app.use((request, response)=>{  // กรณีที่กำหนด Urlไม่ตรงกับ path เลย
    response.status(404);
    response.type('text/html');
    response.send('404 Not Found');
})

app.listen(8000, () => console.log('Server started!'));