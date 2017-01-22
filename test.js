const api = require('./index.js')

// api.search('你好吗').then(data=>console.log(data))
// api.play(28377211).then(data => console.log(data))
// api.getArtistAlbums('9952').then(data => console.log(data))
// api.getAlbum(32311).then(data => console.log(data))
api.playlist(311785002).then(data => console.log(data))