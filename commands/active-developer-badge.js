import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('active-developer-badge')
    .setDescription('How to get the Active Developer Badge'),
  async execute(interaction) {
    await interaction.reply({
      content: `To get the Active Developer Badge, you just need to register and use an application command (like this one!) at least once. ✅`,
      ephemeral: true
    });
  }
};
