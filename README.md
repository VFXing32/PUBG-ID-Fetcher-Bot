# PUBG Discord Bot for User Verification

This bot was created to verify PUBG users on Discord, as PUBG does not provide an OAuth method for verification. By fetching the PUBG ID through a PUBG lobby invite, which can only be shared by the user themselves, the bot extracts and displays the PUBG ID along with the user's Discord ID for verification purposes.

## Features
- **PUBG User Verification**: Fetches the PUBG ID from a lobby invite, which ensures that only the actual user can share their PUBG information.
- Detects PUBG lobby invites in Discord messages.
- Extracts and displays the PUBG `Account ID` from the invite.
- Logs messages and activity to the console.
- Responds to both regular messages and PUBG lobby invites.

## Requirements
To run this bot, you'll need the following:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [Discord.js](https://discord.js.org/#/) (version 12)
- A Discord bot token (obtainable via the [Discord Developer Portal](https://discord.com/developers/applications))
- `.env` file with your Discord bot token

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VFXing32/PUBG-ID-Fetcher.git
   cd PUBG-ID-Fetcher

2. **Install dependencies** Run the following command to install all required packages:
    ```bash
   npm install
   ```
   Make sure to install older version discordjs mentioned below.

3. **Configure environment variables** Create a .env file in the root of your project and add your Discord bot token:
   ```bash
   DISCORD_TOKEN=your_discord_bot_token_here
4. **Run the bot** Start the bot using:
   ```bash
   npm run dev
   ```
## **Usage**
Once the bot is running, it will:

Log when the bot is online.
Listen for all incoming messages.
Detect PUBG lobby invites and extract the Account ID.
Display the PUBG ID along with the Discord ID for user verification.

## Example
When a PUBG lobby invite is detected, the bot will output the following:
   ```bash
   Detected a PUBG lobby invite!
   User ID: 1104710466502144070
   Account ID: account.c674c46a40d14f81b93a0ab9dc25b12c
```
This can then be used for verification purposes as the invite can only be shared by the PUBG user.

## Dependencies
This bot uses the following libraries:

**dotenv** - Loads environment variables from a .env file.
**discord.js@12** - A powerful library for interacting with the Discord API. It uses an older version of Discord JS @ 12.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions for improvements.

## Contact
For any questions or issues, feel free to reach out:

GitHub: [VFXing32](https://github.com/VFXing32)
Discord: -VFXing32#6519


