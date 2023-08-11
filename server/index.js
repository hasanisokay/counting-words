const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Server is running.")
})
// function to count words
const countWords = (str)=>{
    const words = str.toLowerCase().match(/\w+/g);
    const wordCount = {};

    if (words) {
        for (const word of words) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    }
    return wordCount;
}


app.post("/count-words", (req,res)=>{
    const str = req.body.str;
    res.send(countWords(str))
})


app.listen(port, ()=>{
    console.log(`Running on ${port}`);
})