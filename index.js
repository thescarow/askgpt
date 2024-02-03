import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import dotenv from "dotenv"
import path from "path"
// dotenv.config()

import OpenAI from "openai"
const openai = new OpenAI()
// const openai = new OpenAI({ apiKey: 'my apiKey' })
const app = express()
app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 3080

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("./client/build")))

  app.get("*", (req, res) => {
    return res.sendFile(path.resolve("client", "build", "index.html"))
  })
} else {
  app.get("/", (req, res) => {
    res.status(200).send({
      message: "Hello from ASKGPT!"
    })
  })
}

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from ASKGPT!"
  })
})

app.post("/", async (req, res) => {
  try {
    const { message } = req.body
    console.log("message: " + message)

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `${message}`,
      max_tokens: 512,
      temperature: 0.5
    })

    // const response = await openai.createCompletion({
    //   model: "gpt-3.5-turbo",
    //   prompt: `${message}`,
    //   // max number of words it will give results in
    //   max_tokens: 50,
    //   // how much creative answer it will give
    //   temperature: 0.5,
    //   top_p: 1,
    //   //don't repeat similar results
    //   frequency_penalty: 0.5,
    //   // whenever stop sequence comes in the result, the completion will stop
    //   stop: "., \n, \n\n"
    // })

    res.status(200).json({
      // message: response.data.choices[0].text
      message: completion.choices[0].text
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
