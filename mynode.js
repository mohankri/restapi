var http = require("http");
var querystring = require('querystring');

var data = '{"tagId": "3505245", "fetchType": "details"}';


var options = {
  "method": "POST",
  "hostname": "54.241.28.203",
  "port": null,
  "path": "/trackaware/handheldapi/parts",
  "headers": {
    //"content-type": "application/x-www-form-urlencoded",
    "content-type": "application/json",
    "Content-Length": Buffer.byteLength(data),
    "authorization": "Basic a3Jpc2huYTprcmlzaG5hMTE=",
    "cache-control": "no-cache",
    "postman-token": "e80fe97f-ecaa-f410-9cb2-b642bc8185aa"
  }
  //"body": JSON.stringify("tagId" : "3505245", "fetchType": "details");
 
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});
console.log("Data Post " + data);
req.write(data);
req.end();
