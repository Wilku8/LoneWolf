const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick targeted user from guild.')
		.addUserOption(option => option.setName('target').setDescription('User to kick.')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) {
            interaction.reply({content: "succesfully kicked" + user.name, ephemeral: true });
            await member.kick(user)
        }
        else return interaction.reply({content: "You need to specify target."})
        }
};