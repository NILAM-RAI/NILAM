module.exports.config = {
     name: "*",
    version: "1.0",
    role: 1,
    author: "Romim",
    description: "goat goibot",
    category: "noprefix",
    guide: "noprefix",
    coolDown: 5
};
onChat = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
   var rm = ["«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯ\n\n╰•┄┅════❁🌺❁════┅┄•╯\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :🤍🅁🄾🄼🄸🄼🤍 ",
"«”--♥️ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ♥️--“»\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-._সামান্য ফুল পেয়ে খুশি হওয়া একজন\nএকান্তই আমার হোক🌼🌸☺️🖤🙂✨🌼\nᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯ\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍",
"❥◎⃝! «”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\nশূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি ”_আবার কাঁদি!\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি💔🙃\nᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯ\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ 🍂🍁",
" ❥»̶̶͓͓͓̽̽̽«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀\nᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯ\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🌼",
"💜🔐🌈«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»💜🔐🌈___\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\nᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯᚙᰯᰯᰯᰯᰯᰯᰯᰯᰯ͋͒͋͋͋͋͋͋͋ᚙᰯᰯᰯᰯᰯᰯᰯ\n\n___💜🔐🌈\n\n✢╰•┄┅════❁🌺❁════┅┄•╯✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍",
"«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n╰•┄┅════❁🌺❁════┅┄•╯\n\n🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋\n\n✢╰•┄┅════❁🌺❁════┅┄•╯✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫: ༆ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ💫","༅༎💙🦋«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n\n✢╰•┄┅════❁🌺❁════┅┄•╯✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ♥️",
"(-«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇\n\n✢╰•┄┅════❁🌺❁════┅┄•╯✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ💖",

"«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🥰❤️\n\n___🍒🖇️✨___\n\n✢╰•┄┅════❁🌺❁════┅┄•╯✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🌸",
"°🐹💙🍒«”--🤍ʀᴏᴍɪᴍ ᴀʜᴍᴇᴅ🤍--“»\n༆-✿𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝟎𝐌!𝐌༊࿐\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂\n\n✢╰•┄┅════❁🌺❁════┅┄•╯✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝗥𝗢𝗠𝗜𝗠 𝗔𝗛𝗠𝗘𝗗💜🔐🌈" 
 ];
;
  var know = rm[Math.floor(Math.random() * hi.length)];
  var rm = [ "https://i.postimg.cc/BvGp5Yjn/received-872459187256856.jpg",
"https://i.postimg.cc/T3bQDMYs/received-823367592328654.jpg",
"https://i.postimg.cc/TwdcFKq8/received-662706595289390.jpg",
"https://i.postimg.cc/Hnj9WFhB/received-649122990208166.jpg",
"https://i.postimg.cc/Hx6tgTBr/received-543202430952647.jpg",
"https://i.postimg.cc/kGZF2fr9/received-5249749015130376.jpg",
"https://i.postimg.cc/hPk1gyb1/received-447748924177906.jpg",
"https://i.postimg.cc/6qvqmqp0/received-1197167194264182.jpg",
"https://i.imgur.com/vcHxEWD.jpg",
"https://i.imgur.com/mce4XfF.jpg",
"https://i.imgur.com/2YYFjUA.jpg",
"https://i.imgur.com/NDQgQLa.jpg",
"https://i.imgur.com/nxHA5Om.jpg",
"https://i.imgur.com/7wwdqUg.jpg",
"https://i.imgur.com/7E926sj.jpg",
"https://i.imgur.com/3g2HDAF.jpg",
"https://i.imgur.com/OHuPguA.jpg",
];
	 var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache.jpg")).on("close",() => callback());
   };
             