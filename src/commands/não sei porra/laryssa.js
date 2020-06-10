module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!lary')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Hey, espero que veja..')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/a6/38/75/a6387520015390ddb9bb10ac97cd6538.gif")
            .addField("“O amor e o ódio não são cegos, mas estão cegados pelo fogo que carregam dentro.”", 'Eu não sei o que falar, você foi maravilhosa, eu amei todos os momentos que passei ao seu lado, e sabe, apesar de tudo aquilo, eu não consegui te odiar por nenhum momento, não consegui falar mal de você, não consegui esquecer quem você foi pra mim.\nO meu amor por você é feito de fogo grego, uma chama que não se apaga facilmente, mesmo com tantas coisas que já aconteceram para se apagar, ele não apaga, de modo algum. Me desculpe.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
