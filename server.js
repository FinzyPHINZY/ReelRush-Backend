const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database.js");
const morgan = require("morgan");
const homeRoutes = require("./routes/home.js");
const apiRoutes = require("./routes/api.js");

dotenv.config({ path: "./config/config.env" });

// Server config
const app = express();
const PORT = 5000;

// Connect to Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/", homeRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost/${PORT} ...betta go catch it`
  );
});
