const express = require("express");
const router = express.Router();
const {
  getTickets,
  createTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

// We can chain on route methods instead of writing them one by one
router.route("/").get(protect, getTickets).post(protect, createTicket);

module.exports = router;
