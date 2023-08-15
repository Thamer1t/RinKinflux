//import db from '../lib/database.js'
const items = {
    buy: {
        diamond: {
            exp: 350
        },
        potion: {
            money: 1250,
        },
        trash: {
            money: 4,
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        }
    },
    sell: {
        potion: {
            money: 125,
        },
        trash: {
            money: 2
        },
        wood: {
            money: 600
        },
        rock: {
            money: 750
        },
        string: {
            money: 300
        },
        iron: {
            money: 2500
        },
        gold: {
            money: 4700
        },
        diamond: {
            money: 9000
        },
        emerald: {
            money: 15000
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
استخدم الصيغة *${usedPrefix}${command} [صندوق] [العدد]*
مثال الاستخدام: *${usedPrefix}${command} potion 10*

📍 قائمة العناصر:
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `${v} | ${listItems[v][paymentMethod]} ${paymentMethod}`.trim()
    }).join('\n')}
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`ليس لديك ما يكفي من ${paymentMethod}${global.rpg.emoticon(paymentMethod)} لشراء *${total}* ${item}${global.rpg.emoticon(item)}. تحتاج إلى *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${paymentMethod} إضافي للشراء`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`لقد اشتريت *${total}* ${item}${global.rpg.emoticon(item)}`)
    } else {
        if (user[item] < total) return m.reply(`ليس لديك ما يكفي من *${item}* للبيع، لديك فقط ${user[item]} عناصر`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`لقد قمت ببيع *${total}* ${item}`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [العنصر] [العدد]')
handler.tags = ['rpg']
handler.command = /^(شراء|بيع)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
