const express = require("express")
const router = express.Router()

const { generateVoice } = require("./murf")
const { aiResponse } = require("./ai")

router.post("/talk", async (req, res) => {

  const userText = req.body.text

  const reply = await aiResponse(userText)

  const audio = await generateVoice(reply)

  res.json({
    text: reply,
    audio: audio
  })

})

module.exports = router
