"use strict";
// Problem 9 — Bank Transaction Processor
Object.defineProperty(exports, "__esModule", { value: true });
function processTransaction(balance, transaction) {
    if (transaction.type === "deposit") {
        return balance + transaction.amount;
    }
    if (transaction.amount > balance) {
        return balance;
    }
    return balance - transaction.amount;
}
console.log(processTransaction(5000, {
    type: "deposit",
    amount: 2000
}));
console.log(processTransaction(5000, {
    type: "withdraw",
    amount: 2000
}));
console.log(processTransaction(5000, {
    type: "withdraw",
    amount: 7000
}));
//# sourceMappingURL=problem_9.js.map