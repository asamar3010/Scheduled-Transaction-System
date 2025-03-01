const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction({ ...req.body, userId: req.user.id });
        await transaction.save();
        res.json(transaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.json(transactions);
};

