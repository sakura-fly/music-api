const request = require('request-promise')

request('http://s.music.163.com/search/get?s=玫瑰色的你&limit=20&type=1&offset=0')
    .then(data=>console.log(data))