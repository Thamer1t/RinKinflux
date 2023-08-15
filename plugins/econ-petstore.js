
let handler = async (m, { conn, command, args }) => {
  let type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let htki = '––––––『'
  let htka = '』––––––'
  
  //----------الأسعار
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hpetfood = 950

  let caption = `
🐈 • *قطة:* 
➞ ${hcat} رمز الحيوان الأليف🔖
🐕 • *كلب:*
➞ ${hdog} رمز الحيوان الأليف🔖
🐎 • *حصان:* 
➞ ${hhorse} رمز الحيوان الأليف🔖
🦊 • *ثعلب:* 
➞ ${hfox} رمز الحيوان الأليف🔖
🍖 • *طعام الحيوان الأليف:*
➞ ${hpetfood} نقود 💹
- - - - - - - - - - - - - - - - - - - - -
${htki} القدرة ${htka}
➞ 🐈 • قطة :
- زيادة الصحة 5% / المستوى عند استخدام *.heal*
➞ 🐕 • كلب :
- قريبًا...
➞ 🐎 • حصان :
- قريبًا...
➞ 🦊 • ثعلب :
- قريبًا...
`

  try {
    if (/حيوانات/i.test(command)) {
      switch (type) {
        case 'قطة':
          if (user.cat > 0) return m.reply('لديك هذه القطة بالفعل!')
          if (user.pet < hcat) return m.reply(`رصيد عملة الحيوان الأليف لديك غير كافٍ!`)
          global.db.data.users[m.sender].pet -= hcat
          global.db.data.users[m.sender].cat += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان أليف جديد !${htka}*\n\n🎉 مبروك، لقد اشتريت حيوان أليف *قطة*`, quoted: m })
          break
        case 'كلب':
          if (user.dog > 0) return m.reply('لديك هذا الكلب بالفعل!')
          if (user.pet < hdog) return m.reply(`رصيد عملة الحيوان الأليف لديك غير كافٍ!`)
          global.db.data.users[m.sender].pet -= hdog
          global.db.data.users[m.sender].dog += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان أليف جديد !${htka}*\n\n🎉 مبروك، لقد اشتريت حيوان أليف *كلب*`, quoted: m })
          break
        case 'ثعلب':
          if (user.fox > 0) return m.reply('لديك هذا الثعلب بالفعل!')
          if (user.pet < hfox) return m.reply(`رصيد عملة الحيوان الأليف لديك غير كافٍ!`)
          global.db.data.users[m.sender].pet -= hfox
          global.db.data.users[m.sender].fox += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان أليف جديد !${htka}*\n\n🎉 مبروك، لقد اشتريت حيوان أليف *ثعلب*`, quoted: m })
          break
        case 'حصان':
          if (user.horse > 0) return m.reply('لديك هذا الحصان بالفعل!')
          if (user.pet < hhorse) return m.reply(`رصيد عملة الحيوان الأليف لديك غير كافٍ!`)
          global.db.data.users[m.sender].pet -= hhorse
          global.db.data.users[m.sender].horse += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان أليف جديد !${htka}*\n\n🎉 مبروك، لقد اشتريت حيوان أليف *حصان*`, quoted: m })
          break
        default:
          m.reply(`
*${htki} قائمة الحيوانات الأليفة ${htka}*
🐈 • *قطة:* ${hcat} رمز الحيوان الأليف🔖
🐕 • *كلب:* ${hdog} رمز الحيوان الأليف🔖
🐎 • *حصان:* ${hhorse} رمز الحيوان الأليف🔖
🦊 • *ثعلب:* ${hfox} رمز الحيوان الأليف🔖
🍖 • *طعام الحيوان الأليف:* ${hpetfood} نقود 💹

*مثال:*
${command} قطة
          `)
          break
      }
    } else if (/petfood/i.test(command)) {
      if (user.petfood >= 100)
        return conn.sendMessage(m.chat, { text: `*💖 لديك بالفعل طعام حيوان أليف بكمية كافية!*`, quoted: m })

      if (user.money < hpetfood)
        return conn.sendMessage(m.chat, { text: `*💰 رصيدك لا يكفي لشراء طعام الحيوان الأليف!*\n\n💹 يجب أن يكون لديك ${hpetfood} نقود`, quoted: m })

      global.db.data.users[m.sender].money -= hpetfood
      global.db.data.users[m.sender].petfood += 100
      conn.sendMessage(m.chat, { text: `*💖 تم شراء طعام حيوان الأليف بنجاح!*\n\n🍖 لقد اشتريت طعام الحيوان الأليف بكمية 100`, quoted: m })
    } else {
      m.reply(`
*${htki} متجر الحيوانات الأليفة ${htka}*

${caption}
`)
    }
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, `أخطاء!`, m)
  }
}
handler.help = ['petshop <قطة|كلب|حصان|ثعلب>']
handler.tags = ['rpg']
handler.command = /^(حيوانات)$/i
handler.register = false
handler.limit = false
module.exports = handler
