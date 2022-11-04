/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['6282280420522']
global.ownernomer = "6282280420522"
global.premium = ['6282280420522','6281328144300']
global.packname = 'asta'
global.author = 'Cuyy'
global.sessionName = 'zenss'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Lu mimpi jadi ADMIN bro?',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'lu bukan owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'sabar...',
    endLimit: 'Awokawok limit nya habis',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./image/zens.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
