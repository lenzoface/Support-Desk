const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },
    text: {
      type: String,
      required: [true, "Пожалуйста добавьте текст"],
    },
    // to be done in future, make a portal for staff to manage tickets
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  // Will have info about actions (time, date)
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
