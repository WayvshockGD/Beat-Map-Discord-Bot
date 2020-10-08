const fs = require('fs')
const Discord = require('discord.js');
const { prefix2, token, status } = require('./source/settings/config.json')
const channel = require('./source/settings/channels.json')
const { MessageEmbed } = require('discord.js')
const Enmap = require('enmap');

const client = new Discord.Client()
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

client.once('ready', () => {
    client.user.setActivity(`${prefix2}${status}`, {
        type: "LISTENING"
      });
    console.log(`${client.user.tag} is ready on ${client.guilds.cache.size} guild(s) \n \nserving ${client.users.cache.size} users \n \nprefix: ${prefix2}`)
})

client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

const defaultSettings = {
  prefix: "bm!",
  adminRole: "Co-Owner"
}

client.on('message', message => {
    
    
    });


client.on('message', message => {
    
    if (!message.content.startsWith(prefix2) || message.author.bot) return;


	const args = message.content.slice(prefix2.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
        console.error(error);
        const error_embed = new MessageEmbed()
        .setTitle(`:x: A Error has occurred!`)
        .setColor("RED")
        .setDescription(`\`\`\`javascript\nuser: ${message.author.tag}\n${error}\ncommand: ${message.content}\n\`\`\``)
        client.channels.cache.get(channel.error_log).send(error_embed)
    }
});


client.login(token)