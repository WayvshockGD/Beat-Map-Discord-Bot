const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    description: '',
    execute(message, client) {

        const ping = Date.now() - message.createdTimestamp + ' ms';

       const ping5 = new MessageEmbed()
       .setTitle(`Pinging...`)
       .setColor('BLUE')
       message.channel.send(ping5).then(m => {
           const ping5 = new MessageEmbed()
           .setTitle(`Current Ping:`)
           .setColor('GREEN')
           .setDescription(`Pong! \`\`\`javascript\nBot ping: ${Date.now() - message.createdTimestamp}\n\`\`\` \n \`\`\`javascript\nApi Ping: ${Math.round(message.client.ws.ping)}\n\`\`\``)
           m.edit(ping5)
       })

    }
}