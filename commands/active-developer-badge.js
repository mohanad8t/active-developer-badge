import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('active-developer-badge')
    .setDescription('How to get the Active Developer Badge from Discord'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('How to Get the Active Developer Badge')
      .setDescription(
        `You’ve just used a slash command – that’s exactly what’s needed!\n\n` +
        `To receive the badge:\n` +
        `1. Go to the [Discord Developer Portal](https://discord.com/developers/active-developer)\n` +
        `2. Make sure this bot is selected\n` +
        `3. Click **"Claim Active Developer Badge"**\n\n` +
        `> ⚠️ It may take up to 24 hours after using the command to appear.`
      )
      .setColor(0x5865F2)
      .setFooter({ text: 'Discord Developer Badge Bot', iconURL: interaction.client.user.displayAvatarURL() });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
};
