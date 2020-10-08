const { client_id } = require('../source/settings/config.json')

module.exports = {
    name: 'invite',
    description: '',
    execute(message, client) {

          message.reply(`here is my invite: \n https://discord.com/api/oauth2/authorize?client_id=${client_id}&permissions=8&scope=bot`)
 
    }
}