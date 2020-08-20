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
            .setImage("https://i.pinimg.com/originals/57/f7/01/57f701304499784412e931b5f21c2a19.jpg")
            .addField("Sabe, Shiro.. Eu te amo...", 'Sabe.. Eu não tenho palavras para descrever o quanto me arrependo por ter te feito tanta merda, não consigo encontrar palavras para descrever o quão arrependido me sinto por ter feito o que fiz, você foi melhor pessoa na minha inteira, sem você, eu não seria nada... Sem você, eu não conseguiria...\nIsmaele, eu espero algum dia poder te fazer minha esposa, novamente, eu espero conseguir ter você de volta em minha vida. Mas caso eu não consiga, tudo bem, contanto que você esteja feliz, saudável e bem consigo mesma, você foi a melhor pessoa da minha vida, você mudou ela por completo, eu te amo, com todas as minhas forças, eu te amo.')
            .setColor('#ffcbdb')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
