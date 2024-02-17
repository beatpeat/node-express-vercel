// Import packages
const express = require("express");

// Create router
const router = express.Router();

// Middlewares
const app = express();
app.use(express.json());

// Routes
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing 2",
    message: "The app is working properly!",
  });
});

// Use router middleware
app.use("/home", router);

// Connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

// Export router
module.exports = router;
