import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*ميسي*`, m)} 
conn.sendButton(m.chat, "*ميسي*", author, url, [['⚽ التالي ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi']
handler.tags = ['ترفيه']
handler.command = /^(ميسي)$/i
export default handler
