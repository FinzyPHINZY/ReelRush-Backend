const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database.js");
const morgan = require("morgan");
const helmet = require("helmet");
const homeRoutes = require("./routes/home.js");
const apiRoutes = require("./routes/api.js");
const PORT = process.env.PORT || 3000;

dotenv.config({ path: "./config/config.env" });

// Server config
const app = express();

// Connect to Database
connectDB();

// Middlewares
app.set("trust proxy", true);
app.use(helmet());
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(morgan("short", { stream: accessLogStream }));

// Routes
app.use("/", homeRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost/${PORT} ...betta go catch it`
  );
});
