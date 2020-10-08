const { MessageEmbed } = require('discord.js')
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: 'uptime',
    description: '',
    execute(message, client) {

        const duration = moment.duration(client.uptime).format(" D [days], H [hours], m [minutes], s [seconds]");

       const uptime = new MessageEmbed()
       .setTitle(`Current Bot Uptime:`)
       .setColor('GREEN')
       .setDescription(`\`\`\`javascript\n${duration}\n\`\`\``)
       message.channel.send(uptime)

    }

}