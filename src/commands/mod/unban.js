module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) {
                message.channel.send("Você não tem acessso ao comando!!")
        }
        else {
            let memberId = message.content.substring(message.content.indexOf(' ') + 1)
            let member = message.guild.members.cache.get(memberId);
            try {
                let bannedMember = await message.guild.members.unban(memberId);
                if(bannedMember)
                    message.reply(bannedMember.tag + " Foi desbanido, nojo, você teve piedade. . .");
            }
            catch(err) {
                message.reply(`Não consegui desbanir o membro!\nEu só consigo desbanir via o ID, tente isso!\n||Você tem certeza que quer ter piedade de alguém?||`)
            }
        }
    },
    aliases: ['desbanir'],
    description: 'Desbane um membro'
}