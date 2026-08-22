"use strict";
// Problem 10 — EV Scooter Rental Fee Calculator
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRentalFee(vehicle, minutes) {
    if (vehicle === "scooter") {
        return 10 + (minutes * 2);
    }
    else if (vehicle === "ebike") {
        return 15 + (minutes * 3);
    }
    else {
        return 25 + (minutes * 5);
    }
}
console.log(calculateRentalFee("scooter", 20));
// 50
console.log(calculateRentalFee("ebike", 20));
// 75
console.log(calculateRentalFee("moped", 20));
// 125
// 0 minutes
console.log(calculateRentalFee("scooter", 0));
// 10
// TypeScript error:
// console.log(calculateRentalFee("bike", 20));
//# sourceMappingURL=problem_19.js.map