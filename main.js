const express = require('express');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
   res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res, next){
   res.redirect('/');
});

app.use(function(err, res, res, next){
   res.send({
      error: 'initernal server error'
   });
});

app.listen(process.env.PORT || 5004, function(){
   var port = process.env.PORT || 5004;

   console.log('App ready di port ' + port);
});