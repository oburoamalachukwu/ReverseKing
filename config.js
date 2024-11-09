//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233257514504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpLZVE0ME42eFpqdDZGNkF0eEh0V1RjOVVCK1RSdjBsQXEyb1hUcDBITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnZMSmhMTXlkOXZQVWxGZVpSbEpFb2tmQkhEMXlRZlhRSGJDaWFieEltdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySFozbHRCb1llM1MrOWJZMDhYRTJobDliTVRUYzlBRmpyc2FHN0ttMW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvYTVLNWNSVEJMTTVVN1h6amF0ZUd0dlgxdXY0dGlZaWVONXJHQ2RkVGlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHakR0R3llSGwweUtXZ2VKdk16bHdsdTB0T1VqMDBLZVJvUGNRQjFlbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFRWFDYkxpYnhwWGdLQnNjNHhzbWZZL0p6V0lMd1FBWkFwOTVFUVJ2Mk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBtM0JiL0REbXU2M1BXb0tHSUM3aWtEbUJYREpzN1l2OEtrWkoyM2lYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZDVnhwdlc1RldKNXpXS3FYWDhMZERPK3UxOC9NT2V4dWNKRkl0Y1Vtaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFyOVhTbm5SaVBROHl4U3prd0lpS1cxa2syRXpPNU1LcitKS2tPTGFzQi8vR3NvRWFPOTFwNVlUQ3NNaDl4b0xwMU9SdWJHUXVTaysyZWR1VkZsU2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiI4ZHBEWWJHaHhKZjVrNG9lSU9VTnFhRUpFL2hBaVVWTm1WTjBlbm9ucDJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCM0lUeThJMlNRMktmRUF2MHpGazN3IiwicGhvbmVJZCI6IjRlOTI0ZTZmLWEwN2EtNDlmNi05MzUxLWYwODhiOTA5NTQyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYT01aeGFWRDF6azgxQUk3b3NrSUxtQXlFYTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFoyVzFZbXpleWdaUnlxb1dnY3NpWFN6VG1rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY4TjdRM0JEIiwibWUiOnsiaWQiOiIyMzQ5MDQ2MTQ1MjE2OjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVsaXRlIHR2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNallvZE1HRUxicXZia0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrNVN5ZmhCbHFoTnF2SEFjZ2RPaFZ1MGg4eHJwRG5lMTRydlIyMlg2eVFjPSIsImFjY291bnRTaWduYXR1cmUiOiJNT3VxOW9KS0NkQWFVdWVUclVYQ0ZDWmlRdGlJZ0VuSnJkVmRLc1J4eWxBZUtQZWcyM0ljSXQ2M2pma1JieHpGVWo5b29sUlNvZU5nQ1ZKYm9jUmlDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTVdwUW5aSEFZS1J6U3NGUmU0S2lxc2RyRGJCVmdvOCtHM2ZEcjlPdlE0UExiMWg4dzNQaG8zMVdOaERBd09PMWhpMjNNOWt0bUUzUnpneHJncVREaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQ2MTQ1MjE2OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpPVXNuNFFaYW9UYXJ4d0hJSFRvVmJ0SWZNYTZRNTN0ZUs3MGR0bCtza0gifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzExNjM0NTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUE1SIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
