module.exports = {
       run: (client, message, args) {
        if(message.author.bot) return;
        const { guild } = message
        const embed = new MessageEmbed()
            .setDescription('Olá, [este](https://discordapp.com/oauth2/authorize?client_id=612773161485729822&scope=bot&permissions=818343039) é o convite que me fará entrar em seu servidor!')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setColor('RANDOM')
            .setThumbnail('https://i.gifer.com/H0bB.gif')
            .setFooter('Sim! Eu preciso de bastante permissões para funcionar, não me culpe!')
            message.channel.send(embed)
    }
}
