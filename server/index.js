const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const user = require("./routes/user");
const PORT = process.env.PORT || 4000;

// Use CORS middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Parse URL-encoded data


const Product = require("./models/User");
// Import and mount routes
app.use("/", user);


// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
