"use strict";
// Problem 1 — Cinema Ticket Counter
Object.defineProperty(exports, "__esModule", { value: true });
function getTicketPrice(age) {
    return age < 5 ? 0 : age <= 13 ? 100 : age < 60 ? 200 : 120;
}
console.log(getTicketPrice(0)); // 0
console.log(getTicketPrice(3)); // 0
console.log(getTicketPrice(12)); // 100
console.log(getTicketPrice(50)); // 200
// Boundary tests
console.log(getTicketPrice(5)); // Almost Sold Out
console.log(getTicketPrice(6)); // Available
console.log(getTicketPrice(20)); // Available
console.log(getTicketPrice(21)); // In Stock
//# sourceMappingURL=problem_1.js.map