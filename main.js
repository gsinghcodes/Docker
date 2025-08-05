import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    return res.json({message: 'NodeJS in a container!!'})
})

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
})