// Template for any upcoming commands, to save time.

module.exports = {
    // The name of the command
    name: '',
    // Any aliases for that command.
    aliases: [],
    // The description
    description: '',
    // how to use command, do command name, then the args.
    usage: '',
    // Whether it has a cool down, can just comment out if needed, otherwise value is a number
    cooldown: 'num',
    // Whether the ocmmand can only be used in the server, and not DMs. Boolean value
    guildOnly: 'bool',
    // The folder which the command is contained in. Required for the reload command.
    category: '',
    // the code to execute when called.
    execute(message, args) {
        message, args;
    },
};

/* PLAINTEXT FORM

const Discord = require('discord.js');

module.exports = {
    name: '',
    aliases: [],
    description: '',
    usage: '',
    cooldown: 'num',
    guildOnly: 'bool',
    category: '',
    execute(message, args) {
        const guildID = message.guild.id;
        const prefix = require('../../guildData/prefixes.json')[guildID].prefix;

        args = message.content.slice(prefix.length).trim().split(/ +/);
        args.shift();
    }
};

*/