const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

// Add a new menu item
router.post("/", async (req, res) => {
    try {
      const { name, description, price, category, image, available } = req.body;
      const newItem = new Menu({ name, description, price, category, image, available });
      await newItem.save();
      res.status(201).json({ message: "Menu item added successfully", newItem });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Search menu by name or category
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const menuItems = await Menu.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
