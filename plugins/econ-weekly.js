const rewards = {
  XP: 15000,
  نقود: 35999,
  جرعات: 9,
};
const cooldown = 604800000;

let handler = async (m) => {
  let user = global.db.data.users[m.sender];
  if (new Date - user.lastweekly < cooldown)
    throw `لقد استلمت هذه المكافأة الأسبوعية بالفعل! انتظر  *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`;
  let text = '';
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] += rewards[reward];
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`;
  }
  
  m.reply(`
    🎁 *مكافأة أسبوعية*
    
    ▢ *تم استلام:*
     ${text}`);
  
  user.lastweekly = new Date * 1;
};

handler.help = ['weekly'];
handler.tags = ['econ'];
handler.command = /^(اسبوعي)$/i;

handler.cooldown = cooldown;

export default handler;
