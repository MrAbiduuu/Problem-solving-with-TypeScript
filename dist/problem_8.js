"use strict";
// Problem 8 — Hospital Patient Status
Object.defineProperty(exports, "__esModule", { value: true });
function getPatientStatus(patient) {
    if (patient.type === "general") {
        return "General patient";
    }
    if (patient.emergencyLevel === 1) {
        return "Critical emergency";
    }
    else if (patient.emergencyLevel === 2) {
        return "Serious emergency";
    }
    else {
        return "Moderate emergency";
    }
}
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 2 }));
console.log(getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }));
//# sourceMappingURL=problem_8.js.map