module.exports = {
    run: async(client, message) => {   
        message.reply(`Se eu pudesse descrever alguém bom, eu diria seu nome, mas eu não sei ele!\nObrigado, gordão, você foi boa companhia.`)
    },
    aliases: [''],
    description: ''
}
module.exports = {
    run: async(client, message) => {  
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!gordao')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Gragos, apenas.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://thumbs.gfycat.com/FemaleSeparateGoa-size_restricted.gif")
            .addField("Mono Gragas Nutella", 'Se eu pudesse descrever alguém bom, eu diria seu nome, mas eu não sei ele!\nObrigado, gordão, você foi boa companhia.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }         
    },
    aliases: [''],
    description: ''
}
