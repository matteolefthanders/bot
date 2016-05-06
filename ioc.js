'use strict';
let ioc = require('electrolyte');
ioc.use(ioc.dir(__dirname));
ioc.use('components', ioc.dir('components'));
module.exports = ioc;
