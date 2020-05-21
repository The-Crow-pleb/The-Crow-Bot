module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send("Você não tem acessso ao comando!!")
        }
        else {
            let memberId = message.content.substring(message.content.indexOf(' ') + 1)
            let member = message.guild.members.cache.get(memberId);
            try {
                let bannedMember = await message.guild.members.ban(memberId);
                if(bannedMember)
                    message.reply(bannedMember.tag + ` Foi banido(a)!`);
            }
            catch(err) {
                message.reply(`Não consegui banir o membro!\nEsse comando só funciona por ID, tenha certeza de utilizar corretamente!`)
            }
        }    
    },
    aliases: ['idb'],
    description: 'Bane um membro pelo ID'
}
