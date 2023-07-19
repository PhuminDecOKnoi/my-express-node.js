const { response, request } = require('express');

const app = require('express')();

app.get('/', (request,response)=>{
    response.type('text/html');
    response.send('<a href="/product-detail/24680">Product-Detail</a><hr/><a href="/search/node.js&express.js/5">Search</a><hr/><a href="/map/10.1122,50.5678/satellite/zoom=16">View Map</a>');
});

app.get('/product-detail/:id', (request,response)=>{
    response.send('product Id=' + request.params.id);
});

app.get('/search/:q/:page', (request,response)=>{
    response.type('text/html');
    response.send('show results for '+ request.params.q + ' on page: '+request.params['page']);
});

app.get('/map/:lat,:lon/:type/zoom=:zoom',(request, response)=>{
    response.type('text/html');
    response.send('latitude:'+request.params['lat']+' longtitude: '+request.params['lon'] +' type: '+ request.params.type + ' zoom: '+request.params.zoom);
});

app.use(request, response =>{
    response.send('Error 404 : not found');
});

app.listen(3000,()=>console.log('Server started ...!'));