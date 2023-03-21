const gifPostSchema = require('../mongoDb-schema/create-gif-schema')

module.exports = {
  createRecord: async (req, res) => {
    const data = req.body

    try {
      const createdGif = new gifPostSchema(data)

      res.send({error: false, message: 'Gif postas sukurtas', createdGif })
      console.log(`Sukurtas gif'as su id: ${createdGif.id}`)
      await createdGif.save()
    } catch (error) {
      res.send({error: true, message: error.message })
    }

  },

  getAllRecord: async (req, res) => {
    const getAll = await gifPostSchema.find()

    res.send({error: false, message: '', getAll})
  },

  getSingleRecord: async (req, res) => {
    const {id} = req.params
    console.log(`Gautas vienas gifas su id: ${id}`)
    const getSingle = await gifPostSchema.findOne({id})
    console.log(getSingle)
    res.send({getSingle})
  },

  deleteRecord: async (req, res) => {
    const {id} = req.params
    console.log(`Įvykdytas gif'o ištrynimas su id: ${id}`)
    const deleteGif = await gifPostSchema.findOneAndDelete({id})
    res.send({deleteGif})
  },

  updateRecord: async (req, res) => {
    try {
      const id = req.params
      const newUrl =  await req.body
      const updatedGif = await gifPostSchema.findOneAndUpdate(id, {$set: newUrl}, {new: true})
      console.log(`Atnaujintas gif'o url: ${updatedGif.url} kurio id: ${updatedGif.id}`)
      res.send({error: false, message: 'Gif updated', gif: updatedGif})
    } catch (error) {
      res.send({error: true, message: error.message})
    }

  }
}