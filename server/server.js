import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import connectDB from "./config/database.js";



const app = express();
const port = process.env.PORT || 4001

connectDB();

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

app.get('/', (req, res)=> res.send("MERN Auth Backend"))

app.listen(port, ()=> console.log(`Server started on PORT: ${port}`)
)