var express = require('express');
var app = express();


var port = process.env.PORT;

app.get("/", function(req, res) {
  var ipaddress = req.headers["x-forwarded-for"];
  var language = req.headers["accept-language"].split(",")[0];
  var software = req.headers["user-agent"].split("(")[1].split(")")[0];
  res.send(JSON.stringify({
    "ipaddress": ipaddress,
    "language": language,
    "software": software
  }));
});


app.listen(port, function () {
  console.log('Example app listening on port' + port);
})