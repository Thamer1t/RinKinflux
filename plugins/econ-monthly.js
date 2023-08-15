const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 1
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `لقد تم استلام مكافأة الشهر هذه بالفعل، انتظر حتى *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    //conn.sendButton(m.chat,'*––––––『 الشهرية 』––––––*', text.trim(), null, [['المخزن', '.inv'], ['القائمة', '.menu']],m)
    m.reply(`
    🎁 *مكافأة شهرية*
    
    ▢ *لقد تم استلام:*
     ${text}`)
    user.lastmonthly = new Date * 1
}
handler.help = ['شهرية']
handler.tags = ['rpg']
handler.command = /^(شهري)$/i

handler.cooldown = cooldown

export default handler
