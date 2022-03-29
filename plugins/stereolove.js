let fs = require('fs')
let handler = async (m) => {
let streo = fs.readFileSync('./audio/stereolovedj.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ASEK*', 'status@broadcast')
}

handler.customPrefix = /^(P|p|djstereo)$/i
handler.command = new RegExp

module.exports = handler
