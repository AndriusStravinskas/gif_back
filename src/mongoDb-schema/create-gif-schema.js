const mongoose = require('mongoose')
const schema = mongoose.Schema

const gifPostSchema = new schema({
  id: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  },
  userSecret: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('createdGifPost', gifPostSchema)