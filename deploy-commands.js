import { REST, Routes } from 'discord.js';
import fs from 'fs';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const configJson = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commands = [];
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  commands.push(command.default.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(configJson.token);

try {
  console.log('Deploying slash commands...');
  await rest.put(
    Routes.applicationGuildCommands(configJson.clientId, configJson.guildId),
    { body: commands }
  );
  console.log('✅ Commands deployed successfully!');
} catch (error) {
  console.error(error);
}
