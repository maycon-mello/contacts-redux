let host = window ? window.location.host : '127.0.0.1'
var serverURL = 'http://' + host;
var $ = require("jquery");
/**
 *
 *
 */
var WS = {},
    URL = "http://" + host + "/contacts",
    url = URL;
   // url = App.serverURL + "/Node";

WS.GET = function (id, callback) {
  console.log("GET");
  var url = URL;
  if (id) {
    url = url + '/' + id;
  }
  $.ajax({
    method: "GET",
    url: url
  }).done(function( msg ) {
    console.log("===== GET RESULT =====");
    console.log(msg);
    console.log("======================");
    callback(msg.result);
  });
};

WS.GETTags = function (callback) {
  var url = serverURL + '/tags';
  $.ajax({
    method: "GET",
    url: url
  }).done(function( msg ) {
    console.log("===== GET RESULT =====");
    console.log(msg);
    console.log("======================");
    callback(msg.result);
  });
};

WS.PUT = function (node, callback) {
  $.ajax({
    method: "PUT",
    url: url + "/" + node._id,
    data: node
  }).done(function( msg ) {
    callback(msg.result);
  });
};

WS.DELETE = function (id, callback) {
  $.ajax({
    method: "DELETE",
    url: url + "/" + id
  }).done(function(msg) {
    callback(msg.result);
  });
};
//create
WS.POST = function(node, callback) {
  $.ajax({
    method: "POST",
    url: url,
    data: node
  }).done(function(msg) {
    callback(msg.result);
  });
};

module.exports = WS;
