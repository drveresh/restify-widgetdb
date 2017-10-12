Test-with-Restify-and-WidgetDB
===========================

## Install

```sh
$ git clone https://github.com/*.github
$ npm install
```

## Start

```sh
$ node app
```

In your browser, go to:

http://localhost:8123/ to see a statically-served webpage

or 

http://localhost:8123/test to see an API response in JSON


### Response
Test with Restify and WidgetDB

GET http://localhost:8123/test

Responses:

PostRequest: {"status":"success","body":{"id":11,"name":"Number 11"}}
PostRequest: {"status":"success","body":{"id":22,"name":"Number 22"}}
GetRequest: {"id":11,"name":"Number 11"}
PutRequest: {"value":"Record Updated:11","body":{"id":1111,"name":"New Data with id# 1111 and Rand# 675"}}
GetRequest: {"id":1111,"name":"New Data with id# 1111 and Rand# 675"}
PutRequest: {"readyState":4,"responseText":"{\"error\":\"999 ID Not Found\"}","responseJSON":{"error":"999 ID Not Found"},"status":422,"statusText":"Unprocessable Entity"}
GetRequest: {"redId":"888","status":"fail","msg":"Record not available"}
