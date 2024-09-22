import dotenv from 'dotenv';
import Discord from 'discord.js';

// Load environment variables
dotenv.config();

// Create a new client instance with basic intents
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'], // Support partials if needed
    ws: {
        intents: [
            'GUILDS',               // To handle guild-related events
            'GUILD_MESSAGES',        // To handle messages
        ]
    }
});

// Log when the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Listen for all messages and log them to the console
client.on('message', (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    // Check if the message contains PUBG application data and a party ID
    if (message.application && message.activity) {
        const applicationName = message.application.name;
        const partyID = message.activity.partyID;
        const userID = message.author.id; // Fetch the user ID of the sender

        // Check if the application is PUBG
        if (applicationName === 'PUBG: BATTLEGROUNDS' && partyID) {
            // Use a regex to extract the account ID part
            const accountIDMatch = partyID.match(/account\.[a-zA-Z0-9]+/);

            if (accountIDMatch) {
                const accountID = accountIDMatch[0]; // Extract the matched part
                console.log(`Detected a PUBG lobby invite! UserID: ${userID}, AccountID: ${accountID}`);
                message.channel.send(`Detected a PUBG lobby invite!\nUser ID: ${userID}\nAccount ID: ${accountID}`);
            } else {
                console.log('Could not extract Account ID from Party ID.');
            }
        } else {
            console.log('Application detected, but it is not a PUBG lobby invite.');
        }
    } else {
        console.log('No PUBG lobby invite data found.');
    }

    // If it's a regular text message, process it
    console.log(`Message received: ${message.content}`);
    message.channel.send(`Message received: ${message.content}`);
});

// Log in to Discord with the token from your .env file
client.login(process.env.DISCORD_TOKEN);
