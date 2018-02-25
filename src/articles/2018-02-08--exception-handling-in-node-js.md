---
path: "/blog/exception-handling-in-node-js"
date: "2018-02-08"
title: "Exception Handling in Node.js"
---

**Work in Progress - Draft**

The asynchronous nature of JavaScript and Node.js makes error handling a bit different from other mainstream languages. Node.js provides multiple ways of handling the error which depend on the way the error is delivered. There are two ways the error message can be delivered. First is synchronous and the other is asynchronous.

### Synchronous Error Handling
The synchronous errors are handled using `try / catch` block. Most of the operations performed are usually asynchronous but there are instances in which the user may choose a synchronous alternative. One of the common function which gives synchronous errors is `JSON.parse`.

### Asynchronous Error Handling
The asynchronous errors can occur when callback or event emitter is used. Node-style callbacks provide first argument of the callback as the error which can be checked for any errors. The argument passed is null when the operational is successful. When using event emitter, we need to subscribe to the `error` event and provide a callback which is executed when the error occurs.