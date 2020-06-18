const { MessageEmbed } = require('discord.js')

module.exports = {
    run: (client, message, args) => {
        if(message.author.bot) return;
        const { guild } = message
        const embed = new MessageEmbed()
            .setDescription('Olá, [este](https://discord.com/oauth2/authorize?client_id=723187313643094037&scope=bot&permissions=1892084862) é o convite que me fará entrar em seu servidor!')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setColor('RANDOM')
            .setThumbnail('https://i.gifer.com/H0bB.gif')
            .setFooter('Sim! Eu preciso de bastante permissões para funcionar, não me culpe!')
            message.channel.send(embed)
    },
    aliases: [],
    description: ''
}
