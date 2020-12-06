const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const jokes = require('./jokes.js');
const prefix1 = "i'm";
const prefix2 = 'im';
const prefix3 = 'dad';
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	var args = message.content.trim().split(/ +/);
	if (args.slice(0, 2).join(' ').toLowerCase() === 'dad jokes') {
		const newJoke = getRandomInt(9);
		console.log(newJoke);
		message.channel.send(jokes[newJoke]);
	}
	args.splice(0, 1);
	const newMessage = args.join(' ');
	if (!message.content.toLowerCase().startsWith(prefix1) && !message.content.toLowerCase().startsWith(prefix2) || message.author.bot || !message.guild) return;
	message.channel.send(`Hi ${newMessage}, I'm Dad!`);
});
client.login(token);