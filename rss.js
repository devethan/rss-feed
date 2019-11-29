const convert = require("xml-js");
const fetch = require('node-fetch');
console.log(new Date().toLocaleString());
fetch("https://www.tokenpost.kr/rss")
  .then(res => res.text())
  .then(text => convert.xml2js(text, { compact: true, spaces: 4 }))
  .then(res => res.rss.channel.item.map((item, index) => {
      console.log(`${item.title._cdata} | ${item.link._text}`)
  }));
