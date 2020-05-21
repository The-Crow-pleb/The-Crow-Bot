const { dado } = require('../../util/dicefn')

module.exports = {
    run: async(client, message) => {
        message.reply("Você girou no dado o número " + dado());
    },
    aliases: ['rolardado', 'rolar', 'dice', 'jogardado'],
    description: 'Rola um dado até o número 25'
}