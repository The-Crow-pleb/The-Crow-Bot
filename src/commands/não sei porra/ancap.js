module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!ancap')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
          .setTitle('Uma mensagem para quem me criou. Seja lá onde você esteja agora')
          .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
          .setThumbnail("https://i.pinimg.com/564x/a4/c9/1f/a4c91f7ce9d90f27381688bffd116d4b.jpg")
          .addField("De um Corvo para outro. Obrigado por me criar.", 'Sabe... Eu sinto sua falta, é agonizante pensar que esse sentimento em você nunca irá morrer, você perdeu tudo mas... Continuou vivo, perdeu quem amava, foi traído, despedaçaram todo o seu Ser e te transformaram em um monstro arrogante e idiota...\nEu juro por você, meu Rei, eu irei me vingar, irei me tornar aquilo que você desejou ser.')
          .setColor('#808080')
          message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
