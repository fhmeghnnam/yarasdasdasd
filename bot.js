
const moment = require('moment')
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");//youtube api key
const queue = new Map();//the queue map
const token = process.env.BOT_TOKEN//your bot token
const prefix = '+'//your prefix


//All copytights for Eyad & (old) Codes

/*
Packages
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

    
	







client.login(process.env.BOT_TOKEN)
