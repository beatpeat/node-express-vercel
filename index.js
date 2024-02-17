// Import packages
const express = require("express");

// Create router
const router = express.Router();

// Define route
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", router);

// Connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
