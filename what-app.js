'use strict';

module.exports = (function () {
    var name;

    name = process.mainModule.filename
        .split(/\//)
        .pop()
        .replace(/\d/);

    return name[0].toUpperCase() + name.slice(1);

})();