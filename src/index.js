require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'active-developer-badge') {
    await interaction.reply({
      content: '🎉 Congratulations! By using this command, you\'re now eligible for the Discord Active Developer Badge!\n\n' +
               'The badge should appear in your Developer Portal within 24 hours:\n' +
               'https://discord.com/developers/active-developer\n\n' +
               '⭐ Star this project on GitHub: https://github.com/mohanad8t/active-developer-badge-bot',
      ephemeral: true
    });
  }
});

client.login(process.env.DISCORD_TOKEN);