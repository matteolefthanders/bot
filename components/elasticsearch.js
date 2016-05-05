var elasticsearch = require('elasticsearch');

exports = module.exports = function (config) {

  var client = new elasticsearch.Client({
    host: [{
      host: config.elasticsearch.host,
      auth: `${config.elasticsearch.user}:${config.elasticsearch.password}`
    }],
    log: config.elasticsearch.log
  });

  return client;
};
exports['@singleton'] = true;
exports['@require'] = ['config'];
