const http = require('http');
const _ = require ('lodash');

const server = http.createServer((req, res)=>{
    console.log('request made');

    const greet = _.once(()=>{
        console.log('Function Called');
    });
    
    greet ();
    greet ();
});

 server.listen(3001, 'localhost', ()=>{
    console.log('we are listening for the requests');
});
