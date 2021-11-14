const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Sends invite links.'),
	async execute(interaction) {
        interaction.reply(`Bot invite link: https://discord.com/api/oauth2/authorize?client_id=880834712766140427&permissions=141671001335&scope=bot%20applications.commands\nSupport: https://discord.gg/Msr9jsnP8u`);
	},
};