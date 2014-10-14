#!/usr/bin/env node

connect = require("connect");
path = require("path");

app = connect();

harFile = path.join(process.cwd(), process.argv[process.argv.length - 1]);

app.get('/data.har',function(req,res){
  res.end("onInputData(" + fs.readFileSync(harFile) + ");");
});

app.use('/',function(req, res){
  res.send(fs.rea)
});

