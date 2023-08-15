import fetch from 'node-fetch';
import axios from 'axios';
import workData from '../lib/work.json';

let handler = async (m, { conn, usedPrefix, command }) => {
  let hasil = Math.floor(Math.random() * 2000);
  let time = global.db.data.users[m.sender].lastwork + 3600000;
  if (new Date() - global.db.data.users[m.sender].lastwork < 3600000) {
    const remainingTime = msToTime(time - new Date());
    throw `*🧘🏻‍♂️ انت مُتعب من العمل* لذلك يجب عليك ان ترتاح لمدة *${remainingTime}* للعمل مجددًا!`;
  }

  let res = pickRandom(workData);
  global.db.data.users[m.sender].exp += hasil;

  m.reply(`
‣ ${res.fgwork} *${hasil} XP*
`);

  global.db.data.users[m.sender].lastwork = new Date() * 1;
};

handler.help = ['work'];
handler.tags = ['econ'];
handler.command = ['عمل', 'w', 'majduri'];

export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return minutes + " دقيقة " + seconds + " ثانية";
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
