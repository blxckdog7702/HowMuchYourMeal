// express 모듈 불러와서 저장
var express = require('express');

// http 모듈 불러와서 저장
var http = require('http');

/*// express 객체를 app 변수에 저장
var app = express();

app.get('http://www.naver.com', function(req, res) {
    console.log(res);
})
*/

var options = {
    host : 'www.google.com',
    port : 80,
    path : '/'
};

var req = http.get(options, function(res) {
    console.log('STATUS : ' + res.statusCode);
    console.log('HEADERS : ' + JSON.stringify(res.headers));
    
    //응답처리
    var resData = '';
    res.on('data', function(chunk) {
        resData += chunk;
    });

    res.on('end', function() {
        console.log(resData);
    });

    res.on('error', function(e) {
        console.log('ERROR: ' + e.message);
      });
    
});

req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });


