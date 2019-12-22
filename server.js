// Declaring Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const apiRoutes = require("./routes/index");
const PORT = process.env.PORT || 3001;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Setting up build file as the static(for heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Defining API routes
app.use("/api", apiRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds357708.mlab.com:57708/heroku_jd4zvdg8");
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
