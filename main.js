const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = require('./config.json');
const { MessageEmbed } = require('discord.js');

client.on("ready", () => {
  console.log(`Ready!`)
});

client.login(config.token);

client.on("messageCreate", message => {
    if(message.content === "w.invite") {
        message.reply("https://discord.com/api/oauth2/authorize?client_id=880834712766140427&permissions=8&scope=bot")
    }
});

let helpENG = new MessageEmbed()
.setColor('#000000')
.setTitle('Lone Wolf')
.setAuthor('White Wolf#0158', 'https://i.pinimg.com/originals/88/5e/ba/885eba4f83dea7b259fb270bb5f3d027.jpg')
.setURL('https://discord.gg/Msr9jsnP8u')
.set

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});
