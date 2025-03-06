const Cart = require("../models/Cart");
const Menu = require("../models/Menu");


// Add item to cart
const addToCart = async (req, res) => {
    try {
      const { menuItemId, quantity } = req.body;
      const userId = req.user.id;
  
      console.log("Adding to cart:", { menuItemId, quantity, userId });
  
      let cart = await Cart.findOne({ user: userId });
      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
      }
  
      const menuItem = await Menu.findById(menuItemId);
      if (!menuItem) {
        console.error("Menu item not found:", menuItemId);
        return res.status(404).json({ message: "Menu item not found" });
      }
  
      const itemIndex = cart.items.findIndex((item) => item.menuItem.equals(menuItemId));
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ menuItem: menuItemId, quantity });
      }
  
      await cart.save();
      console.log("Cart updated successfully:", cart);
      res.json(cart);
    } catch (error) {
      console.error("Server error in addToCart:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

// Remove item from cart
const removeFromCart = async (req, res) => {
  const { menuItemId } = req.body;
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => !item.menuItem.equals(menuItemId)
    );

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get user's cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.menuItem");
    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addToCart, removeFromCart, getCart };
