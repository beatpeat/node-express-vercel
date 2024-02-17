// Import packages
const express = require("express");
const router = require("router");

module.exports = router;
// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing 2",
    message: "The app is working properly!",
  });
}));

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
