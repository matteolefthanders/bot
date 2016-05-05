'use strict';

var TelegramBot = require('node-telegram-bot-api');
exports = module.exports = function (config) {
  var token = config.telegram.bot.token;
  var bot = new TelegramBot(token, {polling: true});

  bot.onText(/\/info/, function(msg) {
  	var fromId = msg.from.id;
  	bot.getMe()
  	.then(function (a){
  		bot.sendMessage(fromId, JSON.stringify(a));	
  	});
  });

  bot.onText(/\/ranocchia/, function(msg) {
  	var fromId = msg.from.id;
  	bot.sendAudio(fromId,'./audio/ranocchia');
  });

  bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
  });

  return bot;
};
exports['@singleton'] = true;
exports['@require'] = ['config'];
