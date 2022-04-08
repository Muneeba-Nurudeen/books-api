const express =  require("express")
const booksRoute =require("./routes/booksRoute")



const app = express()

//middleware
app.use(express.json())

app.use(booksRoute)

//home route
app.get("/", (req,res)=>{
    res.json("Welcome To Our Library")
})

const PORT = 6005;

app.listen(PORT, ()=>{
    console.log("server is working")
})