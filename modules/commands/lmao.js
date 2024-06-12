module.exports.config = {
	name: "lmao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Heo Rừng",
	description: "Chơi game tu tiên trên chính box chat của bạn",
	commandCategory: "Game",
	usages: "[tag]",
	cooldowns: 0
};
module.exports.onLoad = function() {
try {
	global.lmao = require("./lmao/index.js");
	global.configLmao = require("./lmao/config.json");
}
catch(e) {
	console.log(e)
}
}
module.exports.run = async function({ api, event, args, Users }) {
	var axios = require("axios");
	try {
			var send = (msg, cb)=>api.sendMessage(msg, event.threadID, cb, event.messageID);
			switch(args[0]) {
					case "create":
					case "-c":
							return await global.lmao.createCharecter({ Users, api, event });
					case "info":
					case "-i":
							return await global.lmao.getCharacter({ api, event });
					case "rank":
					case "-r":
							return await global.lmao.getRankingInfo({ api, event });
					case "status":
							return await global.lmao.getServer({ api, event });
					case "stat":
							return await global.lmao.getStats({ api, event });
					case "weapon":
							return await global.lmao.getWeapon({ api, event });
					case "accessories":
								return await global.lmao.getAccessories({ api, event });
					case "top":
					case "-t":
							return await global.lmao.getTop({ api, event });
					case "top-power":
							return await global.lmao.getTopPower({ api, event });
					case "top-rank":
								return await global.lmao.getTopRank({ api, event });
					case "shop":
					case "-s":
							return await api.sendMessage("[LMAO TẠP NHAM TRẤN]\n────────────────\n1. Mua vũ khí loại ????\n2. Mua vũ khí loại ????\n3. Mua vũ khí loại ????\n4. Mua vũ khí loại ????\n5. Mua vũ khí loại ????\n6. Mua vũ khí loại ????\n7. Mua vũ khí loại ????\n8. Tạp Nham Quán🍗\n9. Tạp Chủng Cầm Đồ Tiệm💵\n10. Tiệm Rèn Lmao🔨\n11. Bí Hiểm Tiệm\n12. Pháp Khí Toàn Năng Tiệm\n13. Chơi Đồ Tiệm🍺\nReply (phản hồi) theo stt để chọn", event.threadID, (err, info) => {
									global.client.handleReply.push({
											name: 'lmao',
											messageID: info.messageID,
											author: event.senderID,
											type: "listItem"
									});
							}, event.messageID);
					case "bag":
					case "-b":
							return await global.lmao.myItem({ api, event });
					case "fix":
							var stream = (await axios.get(global.configLmao.fix, { responseType: 'stream' })).data;
							return api.sendMessage({ body: `Lưu ý: chỉ được sửa độ bền của vũ khí đang sử dụng\nTăng 1 độ bền cần 10$\nReply tin nhắn này cùng số độ bền cần tăng, lượng tăng không thể vượt quá độ bền của vũ khí, sử dụng tag weapon để xem thông tin vũ khí.`, attachment: stream }, event.threadID, (err, info) => {
									global.client.handleReply.push({
											name: 'lmao',
											messageID: info.messageID,
											author: event.senderID,
											type: "increaseDurability"
									});
							}, event.messageID);
					case "up-HP":
							var stream = (await axios.get(global.configLmao.fix, { responseType: 'stream' })).data;
							return api.sendMessage({ body: `Reply (phản hồi) số điểm bạn muốn tăng vào chỉ số HP`, attachment: stream }, event.threadID, (err, info) => {
									global.client.handleReply.push({
											name: 'lmao',
											messageID: info.messageID,
											author: event.senderID,
											type: "increaseHp"
									});
							}, event.messageID);
					case "up-DEF":
							var stream = (await axios.get(global.configLmao.fix, { responseType: 'stream' })).data;
							return api.sendMessage({ body: `Reply (phản hồi) số điểm bạn muốn tăng vào chỉ số DEF`, attachment: stream }, event.threadID, (err, info) => {
									global.client.handleReply.push({
											name: 'lmao',
											messageID: info.messageID,
											author: event.senderID,
											type: "increaseDef"
									});
							}, event.messageID);
					case "up-ATK":
							var stream = (await axios.get(global.configLmao.fix, { responseType: 'stream' })).data;
							return api.sendMessage({ body: `Reply (phản hồi) số điểm bạn muốn tăng vào chỉ số ATK`, attachment: stream }, event.threadID, (err, info) => {
									global.client.handleReply.push({
											name: 'lmao',
											messageID: info.messageID,
											author: event.senderID,
											type: "increaseAtk"
									});
							}, event.messageID);
					case "up-SPD":
							var stream = (await axios.get(global.configLmao.fix, { responseType: 'stream' })).data;
							return api.sendMessage({ body: `Reply (phản hồi) số điểm bạn muốn tăng vào chỉ số SPD`, attachment: stream }, event.threadID, (err, info) => {
									global.client.handleReply.push({
											name: 'lmao',
											messageID: info.messageID,
											author: event.senderID,
											type: "increaseSpd"
									});
							}, event.messageID);
					case "fight":
								return global.lmao.matchRanking({ api, event });
					case "pvp":
							return global.lmao.match({ api, event });
					case 'solo': 
							 send(`[ ----- PVP ----- ]\n────────────────\n1. xem toàn bộ phòng pvp\n2. xem phòng đã tạo\n3. tạo phòng\n\nReply (phản hồi) kèm stt muốn chọn hoặc dùng lệnh + tag để thực hiện hành động.`, (err, res)=>(res.name = 'monster', res.type = 'pvp', global.client.handleReply.push(res)));
					break;
					case "location-normal":
							return await global.lmao.listLocationNormal({ api, event });
					case "location-boss":
									return await global.lmao.listLocationBoss({ api, event });
					case "guide":
							return await global.lmao.listGuide({ api, event });
					default:
							var stream = (await axios.get(global.configLmao.monster, { responseType: 'stream' })).data;
							return api.sendMessage({body: "[ LMAO ĐẠI LỤC ]\nChào mừng đến với game tu tiên số 1 Việt Nam\n────────────────\n\n\n Nhập /lmao + keyword để sử dụng", attachment: stream}, event.threadID, event.messageID);
			}
	}
	catch(e) {
			console.log(e);
	}
}
module.exports.handleReply = async function({ api, event, Currencies, handleReply }) {
	try {
			let argus = Object.values(arguments);
			if(typeof handleReply.author == 'string' && handleReply.author != event.senderID) return;
			switch(handleReply.type) {
					case "listItem":
							return await global.lmao.getItems({ api, event, type: event.body });
					case "buyItem":
							return await global.lmao.buyItem({ api, event, idItem: event.body, Currencies, handleReply });
					case "setItem":
							return await global.lmao.setItem({ api, event, idItem: event.body, handleReply });
					case "increaseDurability":
							return await global.lmao.increaseDurability({ api, event, Currencies, handleReply });
					case "increaseHp":
							return await global.lmao.increaseHp({ api, event, Currencies, handleReply });
					case "increaseDef":
							return await global.lmao.increaseDef({ api, event, Currencies, handleReply });
					case "increaseAtk":
							return await global.lmao.increaseAtk({ api, event, Currencies, handleReply });
					case "increaseSpd":
							return await global.lmao.increaseSpd({ api, event, Currencies, handleReply });
					case "match":
							return await global.lmao.match({ api, event, id: event.body });
					case "setLocationID":
							return await global.lmao.setLocationID({ api, event, id: event.body, handleReply });
					case "setGuide":
								return await global.lmao.setGuide({ api, event, id: event.body, handleReply });
					case 'pvp': 
							global.lmao.pvp(argus[0], event.senderID, {
									1: 'list rooms',
									2: 'info room',
									3: 'create room',
							}[event.args[0]]);
							break;
					case 'pvp.rooms':
							global.lmao.pvp.room(argus[0]);
							break;
					case 'pvp.room.info':
							global.lmao.pvp.room(argus[0]);
							break;
					default:
							return;
			}
	}
	catch(e) {
			console.log(e);
	}
}
module.exports.handleReaction = function(o) {
	switch (o.handleReaction.type) {
			case 'pvp.room.info': 
					global.lmao.pvp.room(o, o.event.userID, {
							'👍': 'ready',
							'👎': 'leave',
					}[o.event.reaction]);
					break;
			default:
			break;
	}
}