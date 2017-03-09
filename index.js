/**
 * Created by Reyhan on 3/4/2017.
 */
var Kinect2 = require('kinect2'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.use(express.static('public'));
var kinect = new Kinect2();
if(kinect.open()) {
    server.listen(8000);
    console.log('Server listening on port 8000');
    console.log('Point your browser to http://localhost:8000');

    app.get('/virtual', function(req, res) {
        res.sendfile(__dirname + '/virtual.html');
    });

    app.get('/galaxy', function(req, res) {
        res.sendfile(__dirname + '/galaxy.html');
    });

    app.get('/orbit', function(req, res) {
        res.sendfile(__dirname + '/orbit.html');
    });

    app.get('/burberry', function(req, res) {
        res.sendfile(__dirname + '/burberry.html');
    });

    app.get('/icecream', function(req, res) {
        res.sendfile(__dirname + '/icecream.html');
    });


    app.get('/home', function(req, res) {
        res.sendfile(__dirname + '/index.html');
    });

    app.get('/wardrobe', function(req, res) {
        res.sendfile(__dirname + '/wardrobe.html');
    });

    kinect.on('bodyFrame', function(bodyFrame){
        io.sockets.emit('bodyFrame', bodyFrame);
    });


    kinect.openBodyReader();

    // setTimeout(function(){
    //     kinect.close();
    //     console.log("Kinect Closed");
    // }, 10000);

}