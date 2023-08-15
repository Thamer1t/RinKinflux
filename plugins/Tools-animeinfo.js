import translate from '@vitalets/google-translate-api';
import { Anime } from '@shineiichijo/marika';

const client = new Anime();

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(`*[❗] Please enter the name of an anime to search for.*`);
  try {
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    let resultes = await translate(`${result.background}`, { to: 'ar', autoCorrect: true });
    let resultes2 = await translate(`${result.synopsis}`, { to: 'ar', autoCorrect: true });
    let AnimeInfo = `
🎀 • *العنوان:* ${result.title}
🎋 • *التنسيق:* ${result.type}
📈 • *الحالة:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *عدد الحلقات:* ${result.episodes}
🎈 • *المدة: ${result.duration}*
✨ • *مقتبس من:* ${result.source.toUpperCase()}
💫 • *تاريخ البدء:* ${result.aired.from}
🎗 • *تاريخ الانتهاء:* ${result.aired.to}
🎐 • *الشهرة:* ${result.popularity}
🎏 • *المفضلة:* ${result.favorites}
🎇 • *التقييم:* ${result.rating}
🏅 • *الترتيب:* ${result.rank}
♦ • *التريلر:* ${result.trailer.url}
🌐 • *الرابط:* ${result.url}
🎆 • *الخلفية:* ${resultes.text}
❄ • *الملخص:* ${resultes2.text}
_صنع بحب من قبل بوت غومونريونغ`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] ERROR, please 😢try again.*`;
  }
};

handler.command = /^(معلومات|animeinfo)$/i;
export default handler;
