'use strict';

let TelegramBot = require('node-telegram-bot-api');
exports = module.exports = function (config) {
  let token = config.telegram.bot.token;
  let bot = new TelegramBot(token, {polling: true});

  bot.onText(/\/info/, function(msg) {
  	let fromId = msg.from.id;
  	bot.getMe()
  	.then(function (a){
  		bot.sendMessage(fromId, JSON.stringify(a));	
  	});
  });

  bot.onText(/\/ranocchia/, function(msg) {
  	let fromId = msg.from.id;
  	bot.sendAudio(fromId,'./audio/ranocchia');
  });

  bot.onText(/\/echo (.+)/, function (msg, match) {
    let fromId = msg.from.id;
    let resp = match[1];
    bot.sendMessage(fromId, resp);
  });

  return bot;
};
exports['@singleton'] = true;
exports['@require'] = ['config'];
