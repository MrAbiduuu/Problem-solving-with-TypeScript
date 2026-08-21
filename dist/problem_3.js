"use strict";
// Problem 3 — Social Media Profile Formatter
Object.defineProperty(exports, "__esModule", { value: true });
function formatUserProfile(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}));
console.log(formatUserProfile({
    name: "Abid",
    age: 21,
    city: "Banasree,Dhaka"
}));
//# sourceMappingURL=problem_3.js.map