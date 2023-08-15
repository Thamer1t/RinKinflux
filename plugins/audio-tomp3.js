import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Reply to the video or voice note you want to convert to mp3 with the command :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw '❎ فشل تحميل الصوت'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ فشل بالتحويل'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['صوت']
handler.tags = ['ادوات']
handler.command = /^صوت|a(udio)?)$/i

export default handler
