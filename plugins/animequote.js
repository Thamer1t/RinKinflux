import fetch from 'node-fetch';
import translate from 'translate-google-api';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text();
    const json = await res.json();
    const { sentence, character, anime } = json;
    
    // Translate the quote to Arabic
    const translatedSentence = await translate(sentence, { to: 'ar' });
        const translatedCharacter = await translate(character, { to: 'ar' });

    const message = `❖ المقولة: ${translatedSentence}\n\n❖ شخصية: ${translatedCharacter}\n❖ أنمي: ${anime}`;
    conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['مقولة'];
handler.tags = ['انمي'];
handler.command = /^(مقولة)$/i;

export default handler;
