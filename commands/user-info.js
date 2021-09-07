const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about user.')
		.addUserOption(option => option.setName('target').setDescription('Specify a user.')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`Name: ${user.username}\nId: ${user.id}`);
		return interaction.reply(`Your name: ${user.username}\nYour id: ${user.id}`);
	},
};