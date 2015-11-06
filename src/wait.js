
var Promise = require('es6-promise').Promise;

global.wait = function (sec) {

    return new Promise(function (resolve) {

        setTimeout(resolve);

    });

};
