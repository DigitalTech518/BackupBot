const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
	console.log("Backup Bot Ready!");
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "meep") {
		message.channel.send("Meep?");
	}
	else if (command === "ping") {
		message.channel.send(`Latency is ${Math.round(client.ws.ping)}ms`)
	}

});	

client.login(token);