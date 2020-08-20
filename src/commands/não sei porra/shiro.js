module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!shiro')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Shiro, para você.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/10/1d/6d/101d6d064d43691fd929ac37cc1a6b74.gif")
            .addField("Sabe, Shiro.. Você é importante...", 'Sabe.. Eu não tenho palavras para descrever o quanto me arrependo por ter te feito tanta merda, não consigo encontrar palavras para descrever o quão arrependido me sinto por ter feito o que fiz, você foi melhor pessoa na minha inteira, sem você, eu não seria nada... Sem você, eu não conseguiria...\nIsmaele, eu espero algum dia poder te fazer minha esposa, novamente, eu espero conseguir ter você de volta em minha vida. Mas caso eu não consiga, tudo bem, contanto que você esteja feliz, saudável e bem consigo mesma, você foi a melhor pessoa da minha vida, você mudou ela por completo, eu te amo, com todas as minhas forças, eu te amo.')
            .setColor('#ffcbdb')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
