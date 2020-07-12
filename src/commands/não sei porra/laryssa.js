module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!laryssa')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Hey, espero que veja..')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/a6/38/75/a6387520015390ddb9bb10ac97cd6538.gif")
            .addField("“O amor e o ódio não são cegos, mas estão cegados pelo fogo que carregam dentro.”", 'Eu te prometo, quando eu te encontrar novamente, eu irei me desculpar e lhe mostrar o quanto minhas asas podem crescer, eu te prometo, de sangue, no dia em que nos vermos, você verá o quão grandioso pode ser o KönigKrähe\nNós nos veremos.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
