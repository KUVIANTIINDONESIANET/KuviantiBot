const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");
const { exec } = require('child_process');
const client = require('./whatsapp/message.js');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const os = require('os');
const conn = require('./whatsapp/connect');
const { color } = require('./lib/color');
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const axios = require('axios');
const Exif = require('./lib/exif');
const exif = new Exif();
const util = require('util')

conn.connect()
const xinz = conn.client

fake = 'KUVIANTI INDONESIA NET'
fakeimage = fs.readFileSync(`./media/aqul.jpeg`)
prefix = '.'
public = false

client.on('message-new', async(qul) => {
    try {
        if (!qul.message) return
		if (qul.key && qul.key.remoteJid == 'status@broadcast') return

        global.prefix
		const content = JSON.stringify(qul.message)
		const from = qul.key.remoteJid
		const type = Object.keys(qul.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && qul.message.conversation.startsWith(prefix)) ? qul.message.conversation : (type == 'imageMessage') && qul.message.imageMessage.caption.startsWith(prefix) ? qul.message.imageMessage.caption : (type == 'videoMessage') && qul.message.videoMessage.caption.startsWith(prefix) ? qul.message.videoMessage.caption : (type == 'extendedTextMessage') && qul.message.extendedTextMessage.text.startsWith(prefix) ? qul.message.extendedTextMessage.text : ''
		chats = (type === 'conversation') ? qul.message.conversation : (type === 'extendedTextMessage') ? qul.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = chats.slice(command.length + 2, chats.length)
		const ramadhan = await axios.get('https://clientbot-api.herokuapp.com/api/hitungmundur?apikey=clientBot&tanggal=12&bulan=4')
		const idulfitri = await axios.get('https://clientbot-api.herokuapp.com/api/hitungmundur?apikey=clientBot&tanggal=13&bulan=5')
		const iduladha = await axios.get('https://clientbot-api.herokuapp.com/api/hitungmundur?apikey=clientBot&tanggal=19&bulan=7')
		const tahunbaru = await axios.get('https://clientbot-api.herokuapp.com/api/hitungmundur?apikey=clientBot&tanggal=31&bulan=12')
		const ucapan = await axios.get('https://clientbot-api.herokuapp.com/api/ucapan?apikey=clientBot&timeZone=Asia/Jakarta')

        const botNumber = client.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = qul.key.fromMe ? client.user.jid : isGroup ? qul.participant : qul.key.remoteJid
		const totalchat = await client.chats.all()
		const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupAdmins = isGroup ? client.getGroupAdmins(groupMembers) : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const itsMe = sender === botNumber ? true : false
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const sft = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/aqul.jpeg`)
					},
					"title": "SelfBot",
					"description": "Itsfchri",
					"currencyCode": "IDR",
					"priceAmount1000": "999999999",
					"retailerId": "Self Bot",
					"productImageCount": 999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? sora.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : sora.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (itsMe){
			if (chats.toLowerCase() === `${prefix}self`){
				public = false
				client.sendFakeStatus(from, `「 *Sukses* 」`, `「 *Status: SELF* 」`)
			}
			if (chats.toLowerCase() === 'status'){
				client.sendFakeStatus(from, `「 *STATUS: ${public ? 'PUBLIC' : 'SELF'}* 」`, `status bot`)
			}
		}
		if (!public){
			if (!qul.key.fromMe) return
		}
		if (isCmd && !isGroup) {console.log(color('[CMD]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))}
        if (isCmd && isGroup) {console.log(color('[CMD]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(client.user.name), 'in', color(groupName))}
        switch (command) {
			case 'menu': case 'help':
			    client.reply(from, `*_INFO BOT_*`, qul)
				textnya = `
╭══─⊱ ❰ *INGFO* ❱ ⊰─═
├➤ Status : BAILEYS
├➤ ɴᴏᴍᴏʀ : wa.me/${sender.split("@")[0]}
╰──── ⸨ *SELF BOT* ⸩ ⊰─═══
╠═════════════════════
║ *${ucapan.data.result}*
╠═════════════════════  
║  *${time} WIB*
╠═════════════════════
║ 「 *Hitung mundur ramdhan* 」
║ _${ramadhan.data.result}_
║
║ 「 *Hitung mundur Idul Fitri* 」
║ _${idulfitri.data.result}_
║
║ 「 *Hitung mundur Idul Adha* 」
║ _${iduladha.data.result}_
║
║ _Menuju Tahun Baru 2022_
║ ${tahunbaru.data.result}
║  
╠═════════════════════
║┣━━⊱ 「 *No prefix* 」       
║┣❏ *status*
║┣❏ *> <eval>*
║┣━━⊱ *◪MENU◪*
║┣❏${prefix}sticker
║┣❏${prefix}swm nama | author
║┣❏${prefix}takestick namma | author
║┣❏ ${prefix}colong <reply stiker>
║┣❏${prefix}self
║┣❏ ${prefix}public
║┣❏ ${prefix}ramdhan
║┣❏ ${prefix}idulfitri
║┣❏ ${prefix}iduladha
║┣❏ ${prefix}tahunbaru
║┣❏ ${prefix}hidetag
║┣❏ ${prefix}runtime
║┣❏ ${prefix}speed
║┣❏ ${prefix}mystat
║┣❏ ${prefix}kontak
║┣❏ ${prefix}hidetag
║┣❏ ${prefix}term
║┣❏ ${prefix}setreply
║┣❏${prefix}setprefix
║┣❏ ${prefix}setname
║┣❏ ${prefix}setbio
║┣❏ ${prefix}fdeface
║┣❏ ${prefix}fakethumbnail
║┣❏${prefix}setthumb
║┣❏ ${prefix}getpic
║┣❏ ${prefix}stickertag
║┣❏ ${prefix}imgtag
║┣❏${prefix}kontaktag
║┣❏ ${prefix}tahta teks
║┣❏ ${prefix}battle teks1|teks2
║┣❏ ${prefix}pubg teks1|teks2
║┣❏ ${prefix}gneon teks
║┣❏${prefix}ftneon
║┣❏ ${prefix}love teks
║┣❏ ${prefix}ftneon teks
║┣❏ ${prefix}toxic teks
║┣❏ ${prefix}glow teks
║┣❏ ${prefix}goldplaybuton teks
║┣❏ ${prefix}silverplaybuton teks
║┣❏ ${prefix}nakharamserti teks
║┣❏ ${prefix}jametserti teks
║┣❏ ${prefix}gayserti teks
║┣❏ ${prefix}hackerserti teks
║┣❏${prefix}bucinserti teks
║┣❏${prefix}ffserti teks
║┣❏ ${prefix}ffserti2 teks
║┣❏ ${prefix}ffserti3 teks
║┣❏ ${prefix}ffserti4 teks
║┣❏${prefix}ffserti5 teks
║┣❏ ${prefix}mltourserti teks
║┣❏ ${prefix}mltourserti2 teks
║┣❏ ${prefix}mltourserti3 teks
║┣❏ ${prefix}mltourserti4 teks
║┣❏ ${prefix}mltourserti5 teks
║┣❏ ${prefix}pubgtourserti teks
║┣❏ ${prefix}pubgtourserti2 teks
║┣❏ ${prefix}pubgtourserti3 teks
║┣❏ ${prefix}pubgtourserti4 teks
║┣❏ ${prefix}pubgtourserti5 teks
║┣❏ ${prefix}pacarserti teks
║┣❏ ${prefix}sadboyserti teks
║┣❏ ${prefix}surgaserti teks
║┣❏ ${prefix}promote
║┣❏ ${prefix}demote
║┣❏ ${prefix}kick
║┣❏ ${prefix}add
║┗━━━━ *「 KUVIANTI INDONESIA NET 」*
╚═════════════════

*❒ THANKS TO ❒*
 *𝙰𝚕𝚕𝚊𝚑 𝚂𝚆𝚃*
>𝙽𝙰𝚂𝚆𝙰𝚁𝙸 𝚃𝙴𝙰𝙼
>𝚈𝚘𝚐𝚒 𝙿𝚆
>𝙾𝚖 𝚊𝚚𝚞𝚕
>𝙼𝚜𝚣 𝙿𝚛𝚘𝚜
>𝙰𝚕𝚙𝚒𝚗𝙾𝙵𝙲
>𝙰𝚛𝚞𝚕 𝚆𝚒𝚋𝚞
>𝙳𝚊𝚙𝚙𝚊𝚄𝚑𝚞𝚢
>𝙼𝚊𝚗𝚜
>𝙼𝙸𝙺𝚄
>𝙵𝚊𝚞𝚣𝚊𝚗 𝚙𝚎𝚛𝚏𝚎𝚌𝚝
>𝚡𝙵𝚊𝚌𝚑𝚛𝚒
>𝚇-𝙼𝚛𝙶𝟹𝙿𝟻
>𝚈-𝙳𝚑𝚢𝚉𝚡
📌Jangan spam kalo minta,
ntar jga w bales.
Subrek lah jangan minta doang:v
*SELAMAT MENUNAIKAN IBADAH PUASA*
            ©rara`
						let pekthumb = fs.readFileSync('gambarnye.jpg')
	          client.FakeStatusImgForwarded(from, pekthumb, textnya, '*_ZEUS BOTz_*')
				break
            case 'tes':
            client.FakeTokoForwarded(from, `「 *Tas* 」`, `*_ON SU_*`)
				break
			case 'public':
				public = true
				client.sendFakeStatus(from, `「 *SEMUA ORANG AKTIP* 」`, `*_OKE PUBLIC SU_*`)
				break
			case 'exif':
				if (args.length < 1) return client.reply(from, `Penggunaan ${prefix}exif nama|author`, qul)
				if (!arg.split('|')) return client.reply(from, `Penggunaan ${prefix}exif nama|author`, qul)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				client.reply(from, 'sukses', qul)
				break
				case 'sticker':
				case 'stiker':
				case 's':
					if (isMedia && !qul.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
						const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						await ffmpeg(`${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									client.reply(from, mess.error.api, qul)
								})
								.on('end', function () {
									console.log('Finish')
									exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
										if (error) return client.reply(from, mess.error.api, qul)
										client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
										fs.unlinkSync(media)
										fs.unlinkSync(`./sticker/${sender}.webp`)
									})
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(`./sticker/${sender}.webp`)
					} else if ((isMedia && qul.message.videoMessage.fileLength < 10000000 || isQuotedVideo && qul.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
						const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						client.reply(from, mess.wait, qul)
							await ffmpeg(`${media}`)
								.inputFormat(media.split('.')[4])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
									client.reply(from, mess.error.api, qul)
								})
								.on('end', function () {
									console.log('Finish')
									exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
										if (error) return client.reply(from, mess.error.api, qul)
										client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
										fs.unlinkSync(media)
										fs.unlinkSync(`./sticker/${sender}.webp`)
									})
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(`./sticker/${sender}.webp`)
					} else {
						client.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, qul)
					}
					break
            case 'ramadhan':
            teks = `menuju ramadhan`
            client.FakeTokoForwarded(from, `${ramadhan.data.result}`, teks)
						break
						case 'idulfitri':
            teks = `*_MENUJU IDHUL FITRI_*`
            client.FakeTokoForwarded(from, `${idulfitri.data.result}`, teks)
						break
						case 'tahunbaru':
            teks = `*_MENUJU TAHUN BARU 2022_*`
            client.FakeTokoForwarded(from, `${tahunbaru.data.result}`, teks)
						break
						case 'iduladha':
            teks = `*_MENUJU IDHUL ADHA_*`
            client.FakeTokoForwarded(from, `${iduladha.data.result}`, teks)
						break
			case 'swm':
			case 'stickerwm':
				if (isMedia && !qul.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return client.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, qul)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								client.reply(from, mess.error.api, qul)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return client.reply(from, mess.error.api, qul)
									client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && qul.message.videoMessage.fileLength < 10000000 || isQuotedVideo && qul.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return client.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, qul)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : qul
					const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					client.reply(from, mess.wait, qul)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								client.reply(from, mess.error.api, qul)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return client.reply(from, mess.error.api, qul)
									client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
			case 'takestick':
				if (!isQuotedSticker) return client.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, qul)
				const pembawm = body.slice(11)
				if (!pembawm.includes('|')) return client.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, qul)
				const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = pembawm.split('|')[0]
				const author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return client.reply(from, mess.error.api, qul)
					client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
			case 'colong':
				if (!isQuotedSticker) return client.reply(from, `Reply sticker dengan caption *${prefix}colong*`, qul)
				const encmediia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const meidia = await client.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return client.reply(from, mess.error.api, qul)
					client.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), qul)
					fs.unlinkSync(meidia)
				})
				break
			case 'hidetag':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}hidetag teks`, qul)
				client.hideTag(from, arg)
				break
			case 'runtime':
				run = process.uptime()
				let text = client.runtime(run)
				client.FakeTokoForwarded(from, text, `RUNTIME`)
				break
			case 'speed': case 'ping':
				let timestamp = speed();
				let latensi = speed() - timestamp
				client.sendFakeStatus(from, `Speed: ${latensi.toFixed(4)}second`, `speed`)
				break
			case 'mystat': case 'mystatus':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
                anu = process.uptime()
                tesknya = `*V. Whatsapp :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${client.runtime(anu)}`
                client.sendFakeStatus(from, tesknya, `bot status`)
				break
			case 'kontak':
				argz = arg.split(' ')
				if (!argz) return client.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor nama`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					client.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					client.sendKontak(from, argz[0], argz[1])
				}
				break
			case 'term':
				if (!arg) return
				exec(arg, (err, stdout) => {
					if (err) return client.sendFakeStatus(from, err, fake)
					if (stdout) client.sendFakeStatus(from, stdout, fake)
				})
				break
			case 'setreply':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}setreply teks`, qul)
				fake = arg
				client.sendFakeTokoForwaded(from, `Sukses`, fake)
				break
			case 'setprefix':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}setprefix prefix`, qul)
				prefix = arg
				client.sendFakeStatus(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				break
			case 'setname':
				if (!arg) return client.reply(from, 'masukkan nama', qul)
				client.setName(arg)
				.then((res) => client.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => client.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
				if (!arg) return client.reply(from, 'masukkan bio', qul)
				client.setBio(arg)
				.then((res) => client.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => client.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': case 'hack':
				if (!arg) return client.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|bawahnya`, qul)
				argz = arg.split("|")
				if (!argz) return client.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|bawahnya`, qul)
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await client.downloadMediaMessage(encmedia)
					client.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					client.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
			case 'fakethumbnail': case 'fthumbnail': case 'fakethumb':
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await client.downloadMediaMessage(encmedia)
					client.sendFakeImg(from, media, arg, fakeimage, qul)
				} else {
					client.reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, qul)
				}
				break
			case 'setthumb':
				boij = JSON.parse(JSON.stringify(qul).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/aqul.jpeg`, delb)
				client.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'getpic':
				if (qul.message.extendedTextMessage != undefined){
					mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await client.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await client.getBuffer(pic)
					client.sendMessage(from, thumb, MessageType.image)
				}
				break

			case 'imgtag':
				if ((isMedia && !qul.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo : qul
					let media = await client.downloadMediaMessage(encmedia)
					client.hideTagImg(from, media)
				} else {
					client.reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, qul)
				}
				break
            case 'tahta':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}tahta teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://api.zeks.xyz/api/hartatahta?text=${arg}&apikey=apivinz`)
				break
             case 'pubg':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				argz = arg.split("|")
				if (!argz) return client.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, qul)
				axios.get(`https://clientbot-api.herokuapp.com/api/textmaker/game?text=${argz[0]}&text2=${argz[1]}&theme=pubg&apikey=clientBot`)
				.then((res) => client.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					client.reply(from, mess.error.api, qul)
				})
				break
            case 'battle':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}battle teks1|teks2`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				argz = arg.split("|")
				if (!argz) return client.reply(from, `Penggunaan ${prefix}battle teks1|teks2`, qul)
				axios.get(`https://clientbot-api.herokuapp.com/api/textmaker/game?text=${argz[0]}&text2=${argz[1]}&theme=battlefield&apikey=clientBot`)
				.then((res) => client.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					client.reply(from, mess.error.api, qul)
				})
				break
            case 'gneon':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}gneon teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=9b07654c0e005b08a6ec5473&text=${arg}`)
				break
            case 'ftneon':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}ftneon teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `http://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=9b07654c0e005b08a6ec5473&text=${arg}`)
				break
            case 'toxic':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}toxic teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `http://lolhuman.herokuapp.com/api/textprome/toxic?apikey=9b07654c0e005b08a6ec5473&text=${arg}`)
				break
            case 'glow':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}glow teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `http://lolhuman.herokuapp.com/api/photooxy1/glowingneon?apikey=9b07654c0e005b08a6ec5473&text=${arg}`)
				break
           case 'goldplaybuton':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}goldplaybuton teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://api.zeks.xyz/api/gplaybutton?text=${arg}&apikey=apivinz`)
				break
           case 'silverplaybuton':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}silverplaybuton teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://api.zeks.xyz/api/splaybutton?text=${arg}&apikey=apivinz`)
				break
            case 'gayserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}gayserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/GaySerti/img.php?nama=${arg}`)
				break
            case 'hackerserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}hackerserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/HekerSerti/img.php?nama=${arg}`)
				break
             case 'bucinserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}bucin teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/BucinSerti/img.php?nama=${arg}`)
				break
            case 'ffserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}ffserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/FFSerti/img.php?nama=${arg}`)
				break
            case 'ffserti2':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}ffserti2 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/FFSerti2/img.php?nama=${arg}`)
				break
            case 'ffserti3':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}ffserti3 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/FFSerti3/img.php?nama=${arg}`)
				break
            case 'ffserti4':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}ffserti4 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/FFSerti4/img.php?nama=${arg}`)
				break
            case 'ffserti5':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}ffserti5 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/FFSerti5/img.php?nama=${arg}`)
				break
            case 'mltourserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}mltourserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/MLTourSerti/img.php?nama=${arg}`)
				break
            case 'mltourserti2':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}mltourserti2 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${arg}`)
				break
            case 'mltourserti3':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}mltourserti3 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${arg}`)
				break
            case 'mltourserti4':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}mltourserti4 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${arg}`)
				break
            case 'mltourserti5':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}mltourserti5 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${arg}`)
				break
            case 'pubgtourserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pubgtourserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${arg}`)
				break
            case 'pubgtourserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pubgtourserti2 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${arg}`)
				break
            case 'pubgtourserti3':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pubgtourserti3 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${arg}`)
				break
            case 'pubgtourserti4':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pubgtourserti4 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${arg}`)
				break
            case 'pubgtourserti5':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pubgtourserti5 teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${arg}`)
				break
           case 'pacarserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}pacarserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/PacarSerti/img.php?nama=${arg}`)
				break
            case 'sadboyserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}sadboyserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/SadBoySerti/img.php?nama=${arg}`)
				break
		    case 'surgaserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}surgaserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/SurgaSerti/img.php?nama=${arg}`)
				break 
           case 'nakharamserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}nakharamserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${arg}`)
				break
           case 'jametserti':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}jametserti teks`, qul)
				client.sendFakeStatus(from, `sorry proses membutuhkan waktu...`, `loading...`)
				client.sendMediaURL(from, `https://onlydevcity.xyz/JametSerti/img.php?nama=${arg}`)
				break              
            case 'toimg':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (qul.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					client.reply(from, `Maaf tidak mendukung sticker gif`, qul)
				} else {
					const encmedia = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = client.getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							client.reply(from, `gagal`, qul)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							client.sendMessage(from, buffer, image, {quoted: qul, caption: 'NIH'}, fake)
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'shutdown':
				await client.FakeTokoForwarded(from, `Bye...`, `off`)
				await client.sleep(5000)
				process.exit()
				break
			case 'spam':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, qul)
				argz = arg.split("|")
				if (!argz) return client.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, qul)
				if (isNaN(argz[1])) return client.reply(from, `harus berupa angka`, qul)
				for (let i = 0; i < argz[1]; i++){
					client.sendText(from, argz[0], fake)
				}
				break
			case 'sticktag': case 'stickertag':
				if (!isQuotedSticker) return client.reply(from, `Reply sticker dengan caption *${prefix}stickertag*`, qul)
				let encmediai = JSON.parse(JSON.stringify(qul).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let mediai = await client.downloadMediaMessage(encmediai)
				client.hideTagSticker(from, mediai, fake)
				break
             case 'promote':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}promote @tag atau nomor`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					await client.FakeTokoForwarded(from, `sukses`, fake)
					client.promote(from, mentioned)
				} else {
					await client.FakeTokoForwarded(from, `sukses`, fake)
					client.promote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'demote':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}demote @tag atau nomor`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					await client.FakeTokoForwarded(from, `sukses`, fake)
					client.demote(from, mentioned)
				} else {
					await client.FakeTokoForwarded(from, `sukses`, fake)
					client.demote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'kick':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}kick @tag atau nomor`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					await client.FakeTokoForwarded(from, `Bye...`, fake)
					client.kick(from, mentioned)
				} else {
					await client.FakeTokoForwarded(from, `Bye...`, fake)
					client.kick(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'add':
				if (!arg) return client.reply(from, `Penggunaan ${prefix}kick 628xxxx`, qul)
				client.add(from, [args[0] + '@s.whatsapp.net'])
				client.FakeTokoForwarded(from, `Sukses`, fake)
				break
			case 'kontaktag':
				argz = arg.split(' ')
				if (!argz) return client.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, qul)
				if (qul.message.extendedTextMessage != undefined){
                    mentioned = qul.message.extendedTextMessage.contextInfo.mentionedJid
					client.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					client.hideTagKontak(from, argz[0], argz[1])
				}
				break
			default:
				if (chats.startsWith('>')){
					console.log(color('[EVAL]'), color(moment(qul.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
                	return client.reply(from, JSON.stringify(eval(chats.slice(2)), null, 2), qul)
				}
				break
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
})
