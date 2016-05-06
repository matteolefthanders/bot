'use strict';

let TelegramBot = require('node-telegram-bot-api');
exports = module.exports = function (config) {
  let token = config.telegram.bot.token;
  let bot = new TelegramBot(token, {polling: true});

  bot.onText(/\/info/, function(msg) {
  	let fromId = msg.from.id;
  	bot.getMe()
  	.then(function (a){
      a['methods'] = {
        '/ranocchia' : 'epic audio from politinho',
        '/veronica-lala' : 'when veronica was a teletubbies',
        '/veronica-concita' : 'when veronica won a tv show',
        '/veronica-prova-costume' : 'it\'s  veronica ready for the summer?',
        '/veronica-violence' : 'stop the violence against children',
        '/veronica-dodo' : 'when veronica was Dodo\'s best friend',
        '/veronica-inseparabili' : 'veronica and her ex boyfriend'
      }
  		bot.sendMessage(fromId, JSON.stringify(a));	
  	});
  });

  bot.onText(/\/ranocchia/, function(msg) {
  	let fromId = msg.from.id;
  	bot.sendAudio(fromId,'./audio/ranocchia');
  });

  bot.onText(/\/veronica-lala/, function(msg) {
    let fromId = msg.from.id;
    bot.sendPhoto(fromId,'./foto/veronica1.jpg');
  });
  bot.onText(/\/veronica-concita/, function(msg) {
    let fromId = msg.from.id;
    bot.sendPhoto(fromId,'./foto/veronica2.jpg');
  });
  bot.onText(/\/veronica-prova-costume/, function(msg) {
    let fromId = msg.from.id;
    bot.sendPhoto(fromId,'./foto/veronica5.jpg');
  });
  bot.onText(/\/veronica-violence/, function(msg) {
    let fromId = msg.from.id;
    bot.sendPhoto(fromId,'./foto/violence.jpg');
  });
  bot.onText(/\/veronica-dodo/, function(msg) {
    let fromId = msg.from.id;
    bot.sendPhoto(fromId,'./foto/veronica3.jpg');
  });
  bot.onText(/\/veronica-inseparabili/, function(msg) {
    let fromId = msg.from.id;
    bot.sendPhoto(fromId,'./foto/veronica4.jpg');
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
