const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const multer = require("multer");
const path = require("path");

dotenv.config();
// para reconhecer json object
app.use(express.json());

// Mongoose used to connect to my mongo url
mongoose.connect(process.env.MONGO_URL).then(
    console.log("Connected to MongoDB")
).catch((err) => console.log(err));


//storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
// To upload

  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  

/* app.use("/",(req,res)=>{
    console.log("hello sarah linda esse é um teste")
}); 
*/

//port 5000 configured

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen("5000",() => {
    console.log("Backend is running now friends")
})