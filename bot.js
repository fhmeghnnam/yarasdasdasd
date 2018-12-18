const Discord = require('discord.js');
const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '!';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
 **
 أن الحياة تشبه كثيراً مباراة للملاكمة ، لا يهم إذا خسرت 14 جولة ، كل ما عليك هو أن تسقط منافسك بالضربة القاضية خلال ثوان ، وبذك تكون الفائز الأوحد .
( الأصدقاء الحقيقون يصعب إيجادهم، يصعب تركهم، 
ويستحيل نسيانهم هل ستكون صديقا من ذول معنا )
تفضل معنا :heart:
https://discord.gg/ue85Kmh
**
`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN)
