const WidgetDB = require('./widgetdb');

var restify = require('restify'),
  server = restify.createServer();

server.use(restify.bodyParser());

// Static file handling
server.get("/", restify.serveStatic({
  directory: '.',
  default: 'static.htm'
}));

server.get('/test', function (req, res, next) {
  WidgetDB.get("1").then(function (data) {
    console.log("GET/-res:" + JSON.stringify(data));
    res.send(200, {
      'value': 'Hello World'
    });
    return next();
  });
});

server.get('/test/:id', function (req, res, next) {
  WidgetDB.get(req.params.id).then(function (data) {
    console.log("GET/ID-res: " + req.params.id + " >> " + JSON.stringify(data));
    data = (data === undefined) ? {redId: req.params.id, status: 'fail', msg: 'Record not available'} : data;
    res.send(200, (data));
  });
});

server.post('/test', function (req, res, next) {
  WidgetDB.put(req.body.id, req.body);
  console.log("POST-data: " + JSON.stringify(req.body));
  res.send(200, {
    'status': 'success',
    'body': req.body
  });
  return next();
});

server.put('/test/:id', function (req, res, next) {
  WidgetDB.get(req.params.id).then(function (data) {
    console.log("Put/ID-res:" + JSON.stringify(data));
    console.log("Put/ID-new-data:" + JSON.stringify(req.body));
    if (data != undefined) {
      WidgetDB.put(req.params.id, req.body);
      console.log("Record Update Success: " + req.params.id);
      res.send(200, {
        'value': 'Record Updated:' + req.params.id,
        'body': req.body
      });
    } else {
      console.log("Record Update Failed");
      res.send(422, {
        'error': req.params.id + ' ID Not Found'
      });
    }
  });
});

server.listen(8123, function () {
  console.log("Test App Available At: " + server.url);
});
