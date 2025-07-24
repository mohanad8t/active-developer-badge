# 🛠️ Active Developer Badge Bot

A simple Discord bot that helps you qualify for the **Active Developer Badge** on Discord by registering and using one command.

---

## 🚀 Quick Setup

### 1. Create a Discord Bot

- Go to the [Discord Developer Portal](https://discord.com/developers/applications)
- Click **"New Application"**
- Go to the **Bot** tab → Click **"Add Bot"**
- Copy the **Bot Token**

---

### 2. Invite the Bot to Your Server

- Go to the **OAuth2 → URL Generator**
- Select the following scopes:
  - `bot`
  - `applications.commands`
- Under **Bot Permissions**, select:
  - `Send Messages`
- Visit the generated URL to invite the bot

---

### 3. Install & Run Locally

```bash
git clone https://github.com/your-username/active-developer-badge-bot.git
cd active-developer-badge-bot
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
DISCORD_TOKEN=your-bot-token
CLIENT_ID=your-application-id
GUILD_ID=your-server-id
```

Replace with your actual bot details.

---

### 5. Deploy & Start the Bot

```bash
npm run deploy   # Registers slash commands
npm start        # Starts the bot
```

Once running, use the command:

```
/active-developer-badge
```

✅ You should receive the Active Developer Badge within 24 hours:
👉 [https://discord.com/developers/active-developer](https://discord.com/developers/active-developer)
