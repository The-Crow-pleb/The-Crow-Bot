module.exports = {
    run: async(client, message) => {
        const { MessageEmbed } = require('discord.js')
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!avatar')) {
          const args = message.content.split(' ');
          if(args.length > 2) {
            message.channel.send(`Como usar: c!avatar <user_id> | c!avatar @mention`);
        } else if(args.length === 2) {
            const member = message.mentions.members.size === 1 ? 
              message.mentions.members.first() :
              message.guild.members.cache.get(args[1]);
            if(member) {
                const { guild } = message;
                const embed = new MessageEmbed()
                .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                .setDescription('Esta é a imagem que o usuário utiliza no momento!:')
                .setThumbnail(member.user.avatarURL({ dynamic: true }))
                .addField('Este é o link do avatar:  ', member.user.avatarURL({ dynamic: true }))
                .setColor('#01d410')
                message.channel.send(embed);
            } else {
              message.channel.send(`Eu não consegui encontrar o usuario com o ID ou Menção: ${args[1]}, será que ele aprendeu a voar?`);
            }
        }
        }
    },
    aliases: [""],
    description: "Mostra o Avatar do usuario!"
}