module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!fatal')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Fatal? Que nada, mais manso que um pato.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/ff/32/e3/ff32e39da600a97d941ff5d28df7eecf.gif")
            .addField("Apanhou pro meu tryndakkkkkkkkkkkkkkkkkk", 'Eu voei junto de ti por muito tempo, apesar de você sempre sumir, tu sempre voltava a voar comigo, e é isso que importa. Obrigado por estar de volta.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
