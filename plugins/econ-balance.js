let handler = async (m, { conn, usedPrefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة البيانات`
    conn.reply(m.chat, `
┌───⊷ *الرصيد* ⊶
▢ *📌اليوزر* : _@${who.split('@')[0]}_
▢ *💎الماس* : _${user.diamond}_
▢ *💎الذهب* : _${user.gold}_
▢ *💎الصخور* : _${user.rock}_
▢ *💎الزمرد* : _${user.emerald}_
▢ *💎الرتبة* : _${user.role}_
▢ *💎الصحة* : _${user.health}_
▢ *💎الخشب* : _${user.wood}_
▢ *💎الجرعات* : _${user.potion}_
▢ *💎الحديد* : _${user.iron}_
▢ *💎المال* : _${user.money}_
▢ *⬆️نقاط الخبرة* : _الإجمالي ${user.exp}_
└──────────────

*ملاحظة:*
يمكنك شراء 💎 الماس باستخدام الأوامر التالية:
❏ *${usedPrefix}الى-الماس* <المبلغ>
❏ *${usedPrefix}الى-الماس-الكل*`, m, { mentions: [who] })
}

handler.help = ['balance']
handler.tags = ['اقتصاد']
handler.command = ['محفظة', 'حقيبة', 'الماس', 'بنك']

export default handler
