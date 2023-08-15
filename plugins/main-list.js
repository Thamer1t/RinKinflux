let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './kinfluxbot.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `❀° ┄──•••───╮
      غومونريونغ  
╰───•••──┄ °❀     
┌─⊷ *RinBot*
▢ .blocklist
▢ .info
▢ .owner
▢ .donate
▢ .listprem
▢ .help
▢ .audios
▢ .ping
▢ .runtime
└───────────

┌─⊷ *العاب*
▢ .dado
▢ .delttt
▢ .ماث <mode>
▢ .حوم <stone/paper/scissors>
▢ .slot <gamble>
▢ .tictactoe <tag Someone>
└───────────

┌─⊷ *المستويات والاقتصاد*
▢ .اضافة-الماس <@منشن>
▢ .اضافة-اكسبي <@منشن>
▢ .حقيبة
▢ .يومي
▢ .لائحة
▢ .رانك
▢ .تعدين
▢ .سرقة
▢ .شراء
▢ .شراء-الكل
▢ .تحويل [العنصر] [الكمية] [@منشن]
▢ .عمل
└───────────


┌─⊷ *ملصقات*
▢ .attp <text>
▢ .emojimix <emoji+emoji> (ⓓ)
▢ .ملصقات (المطلوب)
▢ .ملصق
▢ .صورة <ملصق>
▢ .الى-فيديو
▢ .حوم <اختيارك>
▢ .حقوق <حقوقك>
└───────────

┌─⊷ *صورة*
▢ .imagen (ⓓ)
▢ .بنترست
▢ .خلفية (ⓓ)
└───────────


┌─⊷ *المجموعة*
▢ .اضافة
▢ .حذف
▢ .حذف-انذار
▢ .خفض (@منشن)
▢ .دعوة <96>
▢ .طرد @منشن
▢ .perfil
▢ .promote
▢ .resetlink
▢ .setbye <text>
▢ .group *open/close*
▢ .setwelcome <text>
▢ .simulate <event> @user
▢ .staff
▢ .tagall
▢ .totag
▢ .warn @user
▢ .warns

└───────────

┌─⊷ *EN/DISABLE OPTIONS*
▢ .enable <option>
▢ .disable <option>
└───────────

┌─⊷ *ANIME*
▢ .وايفو (ⓓ)

└───────────

┌─⊷ *ANIME REACTIONS*
▢ .قتل @منشن (ⓓ)
▢ .تربيت @منشن (ⓓ)
▢ .صصفع @منشن (ⓓ)
└───────────

┌─⊷ *DOWNLOADERS*
▢ .انستا <link ig> (ⓓ)
▢ .شغل

└───────────

┌─⊷ *ادوات*
▢ .احسب <المعادلة>
▢ .قوقل (ⓓ)
▢ .كلمات
▢ .قول <رمز اللغة> <المحتوى>
▢ .ويكيبيديا
└───────────


┌─⊷ *DATABASE*
▢ .listcmd
▢ .setcmd <txt>
└───────────



┌─⊷ *للمالك*
▢ .expired <days>
▢ .addprem <@tag>
▢ .banchat
▢ .listban
▢ .ban @user
▢ .tx
▢ .cleartmp
▢ .delexpired
▢ .delprem @user
▢ .getplugin <name file>
▢ .getfile <name file>
▢ .join <chat.whatsapp.com> <dias>
▢ .reset <54xxx>
▢ .restart
▢ .unbanchat
▢ .unban @user
▢ .update
└───────────

┌─⊷ *ADVANCED*
▢ >
▢ =>
▢ $
└───────────  
  Rin digital
┗━━━ʕ•㉨•ʔ━━━┛`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler
