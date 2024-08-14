
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expRoutes = require("./routes/exp");
const authRoutes = require("./routes/auth");
require('dotenv').config();

const app = express();


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/task-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET, POST, PUT, DELETE', 
    allowedHeaders: 'Content-Type, Authorization', 
    credentials: true 
}));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static('uploads'));



app.use("/exp", expRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});
