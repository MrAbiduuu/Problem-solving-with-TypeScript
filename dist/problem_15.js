"use strict";
// Problem 6 — Music App Feature Access
Object.defineProperty(exports, "__esModule", { value: true });
function canAccessOfflineMode(tier) {
    return tier === "free" ? false : true;
    // write your code here
}
console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));
//# sourceMappingURL=problem_15.js.map