/*export async function all(m) {
  // عندما يقوم شخص ما بإرسال رابط للمجموعة إلى الرسائل المباشرة للبوت
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
    this.sendButton(m.chat, `*دعوة البوت إلى مجموعة*
    
    عندما يقوم شخص ما بإرسال رابط للمجموعة إلى الرسائل المباشرة للبوت
    إذا (m.mtype === 'hi' || m.text.startsWith('kinlflux bot') || m.text.startsWith('hello')) && !m.isBaileys && !m.isGroup) {
      this.sendButton(m.chat, `*أنا بوت كينفلوكس، كيف يمكنني مساعدتك؟ الرد بـ .list لرؤية قائمة البوتات  .owner لرؤية مالك البوت .menu لرؤية قائمة البوت*
        
  مرحبًا @${m.sender.split('@')[0]}
  يمكنك استئجار البوت للانضمام إلى مجموعة أو الاتصال بالمالك
  مزيد من المعلومات انقر على الزر
`.trim(), igfg, null, [['استئجار', '/buyprem']], m, { mentions: [m.sender] })
    m.react('💎')
  }
  
  return !0
}*/
