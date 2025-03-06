require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});
//authentication route
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

//menu route
const menuRoutes = require("./routes/menuRoutes");
app.use("/api/menu", menuRoutes);

//cart route
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);

//order route
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
