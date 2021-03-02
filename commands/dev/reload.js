const Discord = require("discord.js");

module.exports = {
    name: 'reload',
    aliases: ['r'],
    category: 'dev',
    execute(message, client, args) {
        if (!args.length) return message.channel.send(`No command was passed to reload, ${message.author}`);

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        const successEmbed = new Discord.MessageEmbed()
            .setColor('#e312b2')
            .setDescription(`Command reloaded: **${command.name}**`);

        const notCMDEmbed = new Discord.MessageEmbed()
            .setColor('#e312b2')
            .setDescription(`No command has a name or alias of \`${commandName}\`.`);

        if (!command) {
            return message.channel.send(notCMDEmbed);

        } else if (command) {
            delete require.cache[require.resolve(`../${command.category}/${command.name}.js`)];

            try {
                const newCommand = require(`../${command.category}/${command.name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
                message.channel.send(successEmbed);
                console.log(`${command.name} was reloaded.`);
            } catch (error) {
                console.error(error);
                const failEmbed = new Discord.MessageEmbed()
                    .setColor('#e312b2')
                    .setDescription(`**Error reloading ${command.name}!** Error shown below: \n\`\`\`${error.message}\`\`\``);
                message.channel.send(failEmbed);
            }
        }
    }
};