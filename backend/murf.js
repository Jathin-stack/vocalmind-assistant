const axios = require("axios")

async function generateVoice(text){

  const response = await axios.post(
    "https://api.murf.ai/v1/speech/generate",
    {
      text: text,
      voiceId: "en-US-natalie",
      format: "mp3"
    },
    {
      headers:{
        "Content-Type":"application/json",
        "api-key":process.env.MURF_API_KEY
      }
    }
  )

  return response.data.audioFile
}

module.exports = { generateVoice }
