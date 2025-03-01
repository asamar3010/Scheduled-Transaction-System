const cron = require("node-cron");
const Transaction = require("../models/Transaction").default;

const job = cron.schedule("* * * * *", async () => {
    const now = new Date();
    const transactions = await Transaction.find({ status: "pending", scheduledAt: { $lte: now } });

    for (let tx of transactions) {
        tx.status = "completed";
        await tx.save();
        console.log(`Executed transaction ${tx._id} for user ${tx.userId}`);
    }
});
module.exports = job;
