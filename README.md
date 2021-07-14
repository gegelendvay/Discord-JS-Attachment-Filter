# Discord.js Attachment Filter
This is a Discord.js semi-advanced attachment filtering feature, which deletes messages in a set channel if a user doesn't have a bypass role from an array, and if his/her message doesn't contain an attachment. Toggleable bot response comes with the config options built into the source code. Detailed description included.

# Setup
1: Install Node.js: `npm i node.js`

2: Install Discord.js: `npm i discord.js`

3: Create a `modules` folder in your bot's directory, where you can add `media.js`

4: Add `require('./modules/media.js')(client);` to your main bot js file. E.g.: `main.js`

5: Fill out the config part in the file as you wish, and have fun!