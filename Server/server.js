require("dotenv").config();

const atlasURI = `mongodb+srv://root:root@cluster0.cb5iicf.mongodb.net/?retryWrites=true&w=majority`;

// Importing DB connect
const { connectDB } = require("./db/connectDb");

// Importing Routes
const userRoutes = require("./routes/userRoutes");

// Express App
const express = require("express");
const app = express();
const PORT = 3000;

// this enable hackers to not know about the technology we are using
app.disable("x-powered-by"); // less hackers know about our stack

// Cors
const cors = require("cors");

// Cookie-Parser
const cookieParser = require("cookie-parser");

// middleware
app.use(cookieParser({}));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// App Routes
app.use("/api/user", userRoutes);

// Error Routes. which now we aren't using
// app.use((err, req, res, next) => {
//   const status = err.statusCode || 500;
//   const message = err.message || "Server problem";
//   res.status(status).json({ message, status });
// });

// Connecting to Database
connectDB(atlasURI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`)
    );
  })
  .catch((error) => {
    console.log("Error while connecting to database", error);
  });
