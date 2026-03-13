const button = document.getElementById("speak")
const status = document.getElementById("status")

const recognition = new webkitSpeechRecognition()

recognition.lang = "en-US"

button.onclick = () => {

  recognition.start()

  status.innerText = "Listening..."

}

recognition.onresult = async function(event){

  const speech = event.results[0][0].transcript

  status.innerText = "You said: " + speech

  const res = await fetch("http://localhost:5000/api/talk",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
      text:speech
    })

  })

  const data = await res.json()

  const audio = new Audio(data.audio)

  audio.play()

}
