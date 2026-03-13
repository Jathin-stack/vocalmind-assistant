async function aiResponse(text){

  const message = text.toLowerCase()

  if(message.includes("hello")){
    return "Hello! I am your AI voice mentor. How can I help you today?"
  }

  if(message.includes("ai")){
    return "Artificial Intelligence allows computers to learn from data and make decisions."
  }

  if(message.includes("python")){
    return "Python is a powerful programming language used for data science and machine learning."
  }

  return "That is an interesting question. Let me explain it in simple terms."
}

module.exports = { aiResponse }
