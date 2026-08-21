"use strict";
// Problem 2 — Store Inventory Status
Object.defineProperty(exports, "__esModule", { value: true });
function getStockStatus(stock) {
    return stock < 1 ? "Out of Stock" : stock <= 5 ? "Almost Sold Out" : stock <= 20 ? "Available" : "In Stock";
}
console.log(getStockStatus(0)); //out of stock
console.log(getStockStatus(3)); //Almost Sold Out
console.log(getStockStatus(12)); //Available
console.log(getStockStatus(50)); //In Stock
// boundary values to double-check:
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));
//# sourceMappingURL=problem_2.js.map