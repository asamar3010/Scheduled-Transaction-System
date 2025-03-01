const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: Number,
    status: { type: String, default: "pending" },
    scheduledAt: Date,
});

module.exports = mongoose.model("Transaction", TransactionSchema);
