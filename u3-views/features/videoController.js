const { getVideo, getSuggestions } = require('../_services/fakeapi')

const video = (req, res) => {
  const videoId = req.params.id
  const video = getVideo(videoId)
  const teases = getSuggestions(6)
  res.render('video-player', { video: video, teases: teases })
}
const videoHome = (req, res) => {
  const homes = getSuggestions(30)

  res.render('video-home', { homes: homes })
}

module.exports = {
  video,
  videoHome
}
