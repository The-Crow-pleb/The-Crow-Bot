//-------------------------------------------------------------------------------------------------------------------------------------------------------//

require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs').promises;
const path = require('path');
const PREFIX = process.env.PREFIX
const { checkCommandModule, checkProperties } = require('./util/validate');
const dado = () => Math.floor(Math.random() * 24) + 1;
const { createStream, table } = require('table')
const tableConfig = require('./util/tableConfig');
const c = require('ansi-colors');
const commandStatus = [
    [`${c.bold.magenta('Comando')}`, `${c.bold.black('Status do Comando')}`]
];
const { MessageEmbed } = require('discord.js')

//-------------------------------------------------------------------------------------------------------------------------------------------------------//

client.login(process.env.BOT_TOKEN);

client.commands = new Map();

client.on('ready', () => {
    console.log(`${client.user.username} bateu suas asas!`)
    console.log(table(commandStatus))

    client.user.setActivity("Praise The Sun!", {type: 'PLAYING'});
    let activNum = 0;
    setInterval(function() {
        if(activNum === 0) {
            client.user.setActivity("Você já viu um corvo branco? Eu nunca!")
            activNum = 1;
        } else if (activNum === 1) {
            client.user.setActivity("Corvos brancos são apenas pombos!!")
            activNum = 2;
        } else if (activNum === 2) {
            client.user.setActivity("Ich bin eine Krähe, was in aller Welt bist du? Ein Mensch?")
            activNum = 3;
        } else if (activNum === 3) {
            client.user.setActivity('Homens, nenhum deles consegue voar, por isso são tão limitados que ultrapassaram seus próprios limites, uma raça a se admirar, realmente.')
            activNum = 0;
        }  
    }, 300 * 1000);
    
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------//


const usersMap = new Map();
const LIMIT = 6;
const TIME = 1800000;
const DIFF = 3000;

client.on('message', message => {
  if(message.author.bot) return;
  if(usersMap.has(message.author.id)) {
    const userData = usersMap.get(message.author.id);
    const { lastMessage, timer } = userData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = userData.msgCount;
    if(difference > DIFF) {
      clearTimeout(timer);
      userData.msgCount = 1;
      userData.lastMessage = message;
      userData.timer = setTimeout(() => {
        usersMap.delete(message.author.id);
      }, TIME);
      usersMap.set(message.author.id, userData);
    }
    else {
      ++msgCount;
      if(parseInt(msgCount) === LIMIT) {
        const role = message.guild.roles.cache.find(x => x.name === "Silenciado")
        message.member.roles.add(role);
        message.channel.send('Você foi mutado por spam.');
        setTimeout(() => {
          message.member.roles.remove(role);
          message.channel.send('Algum spammer foi desmutado, tomem cuidado!');
        }, TIME);
      } else {
        userData.msgCount = msgCount;
        usersMap.set(message.author.id, userData);
      }
    }
  }
  else {
    let fn = setTimeout(() => {
      usersMap.delete(message.author.id);
    }, TIME);
    usersMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn
    });
  }
});

client.on('message', async function(message) {
    if(message.author.bot) return;

    if(!message.content.startsWith(PREFIX)) return;
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+2).split(new RegExp(/\s+/)).shift()
    let argsToParse = message.content.substring(message.content.indexOf(' ')+2);

    if(client.commands.get(cmdName)) {
        client.commands.get(cmdName)(client, message, argsToParse)
    }
    else {
        message.reply("Comando não existe\nUse c!help para ver todos meus comandos!")

    }
});

(async function registerCommands(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else {
            if(file.endsWith('.js')) {
                let cmdName = file.substring(0, file.indexOf('.js'));
                try {
                    let cmdModule = require(path.join(__dirname, dir, file));
                    if(checkCommandModule(cmdName, cmdModule)) {
                        if(checkProperties(cmdName, cmdModule)) {
                            let { aliases } = cmdModule;
                            client.commands.set(cmdName, cmdModule.run);
                            if(aliases.lenght !== 0) 
                                aliases.forEach(alias => client.commands.set(alias, cmdModule.run))
                            commandStatus.push(
                                [`${c.gray(`${cmdName}`)}`, `${c.bgGreen('Sucesso')}` ]
                            )    
                        } 
                    }
                    else {
                    
                    }

                }
                catch(err) {
                    console.log(err);
                    commandStatus.push(
                        [`${c.whiteBright(`${cmdName}`)}`, `${c.bgRedBright('Falhou')}`]
                    )
                }
            }
        }    
    }
})()

//-------------------------------------------------------------------------------------------------------------------------------------------------------//
