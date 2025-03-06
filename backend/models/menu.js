const express = require("express");
const {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem
} = require("../controllers/menuController");
const { protect } = require("../middleware/authMiddleware"); // Ensure only authenticated users can add/update/delete

const router = express.Router();

router.post("/", protect, createMenuItem); // Create a new menu item
router.get("/", getAllMenuItems); // Get all menu items
router.get("/:id", getMenuItemById); // Get a single menu item by ID
router.put("/:id", protect, updateMenuItem); // Update menu item
router.delete("/:id", protect, deleteMenuItem); // Delete menu item

module.exports = router;
