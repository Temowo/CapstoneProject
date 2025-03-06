const express = require("express");
const {
  placeOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, placeOrder); // Place a new order
router.get("/", protect, getUserOrders); // Get all orders for logged-in user
router.get("/:id", protect, getOrderById); // Get a single order by ID
router.put("/:id/status", protect, updateOrderStatus); // Update order status
router.delete("/:id", protect, deleteOrder); // Delete order

module.exports = router;
