const request = require('request-promise')

const baseUrl = 'http://music.163.com/api'

const api = new class {
    // 搜索
    async search(s = null, {limit = 10, type = 1, offset = 0} = {}) {
        const uri = 'http://s.music.163.com/api/search/get/'
        const options = {
            uri,
            qs: { s, limit, type, offset }
        }
        const data = await request(options)
        return data
    }

    // 歌曲详情
    async play(id) {
        const uri = `${baseUrl}/song/detail`
        const options = {
            uri,
            qs: { id, ids: `[${id}]` }
        }
        const data = await request(options)
        return data
    }

    // 获取歌手专辑列表
    async getArtistAlbums(artistId = null, {limit = 10, offset = 0}) {
        const uri = `${baseUrl}/artist/albums/${artistId}`
        const options = {
            uri,
            qs: { limit, offset }
        }
        const data = await request(options)
        return data
    }

    // 获取专辑音乐列表
    async getAlbum(albumId = null) {
        const uri = `${baseUrl}/album/${albumId}`
        const options = { uri }
        const data = await request(options)
        return data
    }

}()

module.exports = api