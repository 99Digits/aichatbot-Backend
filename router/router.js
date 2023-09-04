const express=require('express')
const router=express.Router()
const data=require('../logic/logic')
router.post('/chatsdata',data.chatdata)
router.get('/allchats',data.Allchats)
router.delete('/clearchats',data.Clearchat)
module.exports=router