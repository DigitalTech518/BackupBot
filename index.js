const fs = require("fs");
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const path = require('path');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands').filter(file => fs.statSync(path.join('./commands', file)).isDirectory());

for (const folder of commandFolders) {
    const comFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of comFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.once("ready", () => {
	console.log("Backup Bot Ready!");
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const commandName = args.shift().toLowerCase();
	
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('Error!');
    }
});

client.login(token);