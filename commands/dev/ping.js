const Discord = require("discord.js");

module.exports = {
    name: "ping",
    category: "dev",
    execute(client, message) {
        const embed = new Discord.MessageEmbed()
            .setColor("#e312b2")
            .setDescription(`Latency is ${Math.round(client.ws.ping)}ms`);
		message.channel.send(embed);
    }
}