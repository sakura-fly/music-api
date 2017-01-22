const rp = require('request-promise')

const baseUrl = 'http://music.163.com'


const request = (options) => {
    Object.assign(options, {
        headers: {
            Referer: baseUrl
        },
        json: true
    })
    return rp(options)
}

const api = new class {
    // 搜索
    async search(s = null, {limit = 10, type = 1, offset = 0} = {}) {
        const uri = 'http://s.music.163.com/api/search/get/'
        const options = {
            uri,
            qs: { s, limit, type, offset }
        }
        return request(options)
    }

    async playlist(id) {
        const uri = `${baseUrl}/api/playlist/detail?id=${id}`
        const options = { uri }
        return request(options)
    }

    // 歌曲详情
    async play(id) {
        const uri = `${baseUrl}/api/song/detail`
        const options = {
            uri,
            qs: { id, ids: `[${id}]` }
        }
        return request(options)
    }

    // 获取歌手专辑列表
    async getArtistAlbums(artistId = null, {limit = 10, offset = 0}) {
        const uri = `${baseUrl}/api/artist/albums/${artistId}`
        const options = {
            uri,
            qs: { limit, offset }
        }
        return request(options)
    }

    // 获取专辑音乐列表
    async getAlbum(albumId = null) {
        const uri = `${baseUrl}/api/album/${albumId}`
        const options = { uri }
        return request(options)
    }

}()

module.exports = api