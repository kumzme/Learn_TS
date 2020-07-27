"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get('https://jsonplaceholder.typicode.com/todos/2')
    .then(function (response) {
    // handle success
    console.log(response);
})["catch"](function (error) {
    // handle error
    console.log(error);
})
    .then(function () {
    // always executed
});
