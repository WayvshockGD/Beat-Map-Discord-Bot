const { MessageEmbed } = require('discord.js')
const { color, prefix } = require('../source/settings/config.json')

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message) {
     
    const help = new MessageEmbed()
     .setTitle(`help:`)
     .setColor(color)
     .setDescription(`Core: \n\`${prefix}ping, ${prefix}stats, ${prefix}uptime, ${prefix}invite\``)
     message.channel.send(help)

    }
}