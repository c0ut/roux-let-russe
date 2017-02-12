const fs        = require('fs');
const discord   = require('discord.js');
const client    = new discord.Client();
const token     = '';
const bot_id    = '';

var bot_main;
bot_main = function () {

    var response = [
        'You\'re dead :/',
        'Lucky boy !'
    ];

    client.on('ready', () => {
        console.log("bot ready.");
    });

    client.on('message', msg => {
        if (msg.isMentioned(bot_id)) {
            console.log(msg.content);
            var str = msg.content;
            var str_test;
            str_test = function () {
                if (str.includes('play')) // if message contain 'play'
                    return 'play';
                else if (str.includes('score')) // if message contain 'score"
                    return 'score';
                else
                    return 'no_args';
            };
            switch (str_test()) {
                case 'play':
                    let random_id = Math.floor((Math.random() * 2) + 1) - 1;
                    msg.reply(response[random_id]);
                    fs.appendFile('./result.pizza', msg.author + ':' + random_id + '\n');
                    break;
                case 'score':
                    msg.reply('score');
                    break;
                case 'no_args':
                    msg.reply('no args');
                    break;
            }
        }
    });

    client.login(token);
};

if (require.main === module) {
    console.log("Initializing the bot.");
    bot_main();
}
