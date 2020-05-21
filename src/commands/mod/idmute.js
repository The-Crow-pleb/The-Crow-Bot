module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission(['DEAFEN_MEMBERS', 'KICK_MEMBERS'])) {
                message.channel.send("Você não tem permissão para fazer isso!")
        }
        else {
            let memberId = message.content.substring(message.content.indexOf(' ') + 1)
            let member = message.guild.members.cache.get(memberId);
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'DEAFEN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
                    message.reply("Você não pode mutar essa pessoa! Ela é ou mais poderosa que você ou tem as mesmas permissões.")
                }
                else {
                    let mutedRole = message.guild.roles.cache.find(x => x.name === "Silenciado")
                    if(mutedRole) {
                        member.roles.add(mutedRole)
                        message.reply("Membro foi mutado!")
                    }
                    if(!mutedRole) {
                        return message.channel.send("Esse servidor não tem o cargo `Silenciado`, tente criar um com as permissões corretas!")
                    }
                }    
            }
            else {
                message.reply(`Não consegui encontrar o membro, infelizmente.\nTenha certeza de utilizar o ID da pessoa, é o unico modo de eu conseguir executar o comando!`)
            }
        }
    },
    aliases: ['mutar'],
    description: 'Muta um membro pelo seu id!'
}