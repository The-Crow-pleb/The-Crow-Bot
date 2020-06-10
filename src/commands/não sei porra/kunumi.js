module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!kunumi')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Kunumi.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/a6/38/75/a6387520015390ddb9bb10ac97cd6538.gif")
            .addField("Você me encorajou a voltar a voar, obrigado.", 'Por muitos dias, eu sobrevoei sua janela. Espantando todos os outros pássaros, mas mal sabia eu que você gostava do cantar deles, mas não do meu.\nQuando percebi isso, eu voei para longe, e, pela primeira vez, minhas asas me traíram.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
