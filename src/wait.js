
var Promise = require('es6-promise');

global.wait = function (sec) {

    return new Promise(function (resolve) {

        setTimeout(resolve);

    });

};
