"use strict";
// Problem 6 — Role-Based Permission Checker
Object.defineProperty(exports, "__esModule", { value: true });
function canEdit(role) {
    return (role === "admin" || role === "editor") ? true : false;
}
console.log(canEdit("admin")); // true
console.log(canEdit("editor")); // true
console.log(canEdit("viewer")); // false
//# sourceMappingURL=problem_6.js.map