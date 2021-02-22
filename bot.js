const config = require("./config.js")
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
	console.log("Backup Bot Ready!");
});

client.login(config.token);