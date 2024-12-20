module.exports = {
  config: {
    name: "antiout",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "Enable or disable antiout",
    longDescription: "",
    category: "boxchat",
    guide: "{pn} {{[on | off]}}",
    envConfig: {
      deltaNext: 5
    }
  },
  onStart: async function({ message, event, threadsData, args }) {
    let antiout = await threadsData.get(event.threadID, "settings.antiout");
    if (antiout === undefined) {
      await threadsData.set(event.threadID, true, "settings.antiout");
      antiout = true;
    }
    if (!["on", "off"].includes(args[0])) {
      return message.reply("Please use 'on' or 'off' as an argument");
    }
    await threadsData.set(event.threadID, args[0] === "on", "settings.antiout");
    return message.reply(`𝐓𝐔𝐑𝐍 ${args[0] === "on" ? "𝐎𝐏𝐄𝐍" : "𝐂𝐋𝐎𝐒𝐄"}.`);
  },
  onEvent: async function({ api, event, threadsData }) {
    const antiout = await threadsData.get(event.threadID, "settings.antiout");
    if (antiout && event.logMessageData && event.logMessageData.leftParticipantFbId) {
      // A user has left the chat, get their user ID
      const userId = event.logMessageData.leftParticipantFbId;

      // Check if the user is still in the chat
      const threadInfo = await api.getThreadInfo(event.threadID);
      const userIndex = threadInfo.participantIDs.indexOf(userId);
      if (userIndex === -1) {
        // The user is not in the chat, add them back
        const addUser = await api.addUserToGroup(userId, event.threadID);
        if (addUser) {
          console.log(`𝐍𝐈𝐋𝐀𝐌 𝐑𝐀𝐈 𝐊𝐄 𝐏𝐄𝐑𝐌𝐈𝐒𝐒𝐈𝐎𝐍 𝐊𝐄 𝐁𝐈𝐍𝐀 𝐓𝐔𝐌,  ${userId} 𝐁𝐇𝐀𝐆 𝐊𝐄 𝐍𝐀𝐇𝐈 𝐉𝐀𝐀 𝐒𝐀𝐊𝐓𝐄 𝐋𝐎 𝐏𝐇𝐈𝐑 𝐀𝐃𝐃 𝐊𝐀𝐑 𝐃𝐈 𝐌𝐀𝐈 😂🤣`);
        } else {
          console.log(`𝐒𝐎𝐑𝐑𝐘 𝐍𝐈𝐋𝐀𝐌 𝐑𝐀𝐈 𝐌𝐀𝐈 𝐈𝐒𝐊𝐎 𝐀𝐃𝐃 𝐍𝐀𝐇𝐈 𝐊𝐑 𝐏𝐀𝐘𝐈 🥺🥺 ${userId} 𝐒𝐎𝐑𝐑𝐘 𝐍𝐈𝐋𝐀𝐌 𝐑𝐀𝐈 𝐌𝐀𝐈 𝐈𝐒𝐊𝐎 𝐀𝐃𝐃 𝐍𝐀𝐇𝐈 𝐊𝐑 𝐏𝐀𝐘𝐈....🥺🥺`);
        }
      }
    }
  }
};
