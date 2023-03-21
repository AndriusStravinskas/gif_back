const express = require('express')
const { createRecord, getAllRecord, getSingleRecord, deleteRecord, updateRecord } = require('../controller/gifs')
const { register } = require('../controller/auth')

const router = express.Router()

router.post('/register', register)

router.get('/getAll', getAllRecord)
router.get('/gif/:id', getSingleRecord)

router.post('/create', createRecord)
router.put('/gif/:id', updateRecord)
router.delete('/gif/:id', deleteRecord)

module.exports = router;
