/*    This file is part of Dad Bot.

	Dad Bot is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Dad Bot is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Dad Bot.  If not, see <https://www.gnu.org/licenses/>. */


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