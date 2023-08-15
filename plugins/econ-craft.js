let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
    global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
    global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
    let botol = 'Guru'
    let wm = 'Asliguru'

    let lgocraft = `
█▀▀▀▀█▀▀▀█▀▀▀▀█
  طاولة الصنع
█▄▄▄▄█▄▄▄█▄▄▄▄█`

    let caption = `
▧ معول ⛏️
▧ سيف ⚔️
▧ سنارة 🎣
*❏ المكونات*
▧ المعول ⛏️
〉 10 أخشاب
〉 5 صخور
〉 5 حديد
〉 20 خيوط
▧ السيف ⚔️
〉 10 أخشاب
〉 15 حديد
▧ السنارة 🎣
〉 10 أخشاب
〉 2 حديد
〉 20 خيوط
▧ الدروع 🥼
〉 30 حديد
〉 1 زمردة
〉 5 ماسة
▧ البطاقة 💳
〉 3 زمردات
〉 6 ماسات
〉 10 ألف مال
`

    try {
        if (/صناعة|صنع/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'معول':
                    if (user.pickaxe > 0) return m.reply('لديك هذا بالفعل')
                    if (user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return conn.sendMessage(m.chat, { text: `ليس لديك موارد كافية!\nلصنع المعول، تحتاج إلى:\n10 أخشاب🪵\n5 حديد⛓\n20 خيوط🕸️\n5 صخور🪨`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    global.db.data.users[m.sender].wood -= 10
                    global.db.data.users[m.sender].iron -= 5
                    user.rock -= 5
                    global.db.data.users[m.sender].string -= 20
                    global.db.data.users[m.sender].pickaxe += 1
                    user.pickaxedurability = 40
                    conn.sendMessage(m.chat, { text: "تم صنع 1 معول بنجاح 🔨", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    break
                case 'سيف':
                    if (user.sword > 0) return m.reply('لديك هذا بالفعل')
                    if (user.wood < 10 || user.iron < 15) return conn.sendMessage(m.chat, { text: `ليس لديك موارد كافية!\nلصنع السيف، تحتاج إلى:\n10 أخشاب🪵\n15 حديد⛓️`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    global.db.data.users[m.sender].wood -= 10
                    global.db.data.users[m.sender].iron -= 15
                    global.db.data.users[m.sender].sword += 1
                    user.sworddurability = 40
                    conn.sendMessage(m.chat, { text: "تم صنع السيف بنجاح ⚔️", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    break
                case 'سنارة':
                    if (user.fishingrod > 0) return m.reply('لديك هذا بالفعل')
                    if (user.wood < 10 || user.iron < 2 || user.string < 20) return conn.sendMessage(m.chat, { text: `ليس لديك موارد كافية!\nلصنع صنارة الصيد، تحتاج إلى:\n10 أخشاب🪵\n2 حديد⛓️\n20 خيوط🕸️`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    global.db.data.users[m.sender].wood -= 10
                    global.db.data.users[m.sender].iron -= 2
                    global.db.data.users[m.sender].string -= 20
                    global.db.data.users[m.sender].fishingrod += 1
                    conn.sendMessage(m.chat, { text: "تم صنع صنارة الصيد بنجاح 🎣", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    break
                case 'درع':
                    if (user.armor > 0) return m.reply('لديك هذا بالفعل')
                    if (user.iron < 30 || user.emerald < 1 || user.diamond < 5) return conn.sendMessage(m.chat, { text: `ليس لديك موارد كافية!\nلصنع الدروع، تحتاج إلى:\n30 حديد⛓️\n1 زمردة💚\n5 ماسة💎`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    global.db.data.users[m.sender].iron -= 30
                    global.db.data.users[m.sender].emerald -= 1
                    global.db.data.users[m.sender].diamond -= 5
                    global.db.data.users[m.sender].armor += 1
                    conn.sendMessage(m.chat, { text: "تم صنع الدروع بنجاح 🥼", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    break
                case 'بطاقة':
                    if (user.atm > 0) return m.reply('لديك هذا بالفعل')
                    if (user.emerald < 3 || user.diamond < 6 || user.money < 10000) return conn.sendMessage(m.chat, { text: `ليس لديك موارد كافية!\nلصنع الصراف الآلي، تحتاج إلى:\n3 زمردات💚\n6 ماسات💎\n10,000 مال💳`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    global.db.data.users[m.sender].emerald -= 3
                    global.db.data.users[m.sender].diamond -= 6
                    global.db.data.users[m.sender].money -= 10000
                    global.db.data.users[m.sender].atm += 1
                    conn.sendMessage(m.chat, { text: "تم صنع الصراف الآلي بنجاح 💳", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
                    break
                default:
                    return conn.sendMessage(m.chat, { text: `نوع الصنع غير صحيح! يرجى استخدام أحد الأنواع التالية:\n- فأس\n- سيف\n- سنارة`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            }
        } else {
            conn.sendMessage(m.chat, { text: caption, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
        }
    } catch (e) {
        console.log(e)
        conn.sendMessage(m.chat, { text: 'حدث خطأ أثناء معالجة الطلب', quoted: m, contextInfo: { mentionedJid: [m.sender] } })
    }
}
