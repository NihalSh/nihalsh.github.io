---
path: "/blog/exception-handling-in-node-js"
date: "2018-02-08"
title: "Exception Handling in Node.js"
---

**Work in Progress - Draft**

The asynchronous nature of JavaScript and Node.js makes error handling a bit different from other mainstream languages. Node.js provides multiple ways of handling the error which depend on the way the error is delivered. There are two ways the error message can be delivered. First is synchronous and the other is asynchronous.

### Synchronous Error Handling
The synchronous errors are handled using `try/catch` block. Most of the operations performed in JavaScript, in general, are usually asynchronous but there are instances in which the user may choose a synchronous alternative. One of the common function which gives synchronous errors is `JSON.parse`.

Given below is a simplified example of such a case. Even though it is contrived, it does happen in real life scenarios like API returning HTML response when the interface is not consistent on corner cases like errors.
```javascript{5-6}
const apiResponseBody = '<html>...</html>';
try {
  JSON.parse(apiResponse);
} catch (e) {
  console.log('an error occurred');
  console.error(e);
}
```
### Asynchronous Error Handling
The asynchronous errors can occur when callback or event emitter is used. Node-style callbacks provide the first argument of the callback as the error which can be checked for any errors. The argument passed is null when the operation is successful. When using event emitter, we need to subscribe to the `error` event and provide a callback which is executed when the error occurs.

#### Event Emitters
Given below is an example where the error will occur if no process is running on port 12345.
```javascript{7-8}
const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
  const stream = request('http://localhost:12345');
  req.pipe(stream).pipe(res);
});

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.listen(3000);
```

If we wrap the highlighted piece of code in a `try/catch`, it doesn't make a difference. Since the `stream` is an event emitter in Node.js, we can listen for error event. The following addition to the code solves the issue.
```javascript{3-5}
  ...
  const stream = request('http://localhost:12345');
  stream.on('error', function(e) {
    this.emit('end');
  });
  req.pipe(stream).pipe(res);
  ...
```

#### Node.js Style Callback or Error-First Callback
In Node.js, all the asynchronous APIs accept a callback whose first parameter is set as an instance of `Error` when an error occurs otherwise it is set as `null`. In this example also wrapping the code with `try/catch` block will not help as the code executes asynchronously.
```javascript
const fs = require('fs');

fs.readFile('./index.js', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```