"use strict";
// Problem 12 — Esports Player Profile Card
Object.defineProperty(exports, "__esModule", { value: true });
function formatPlayerCard(player) {
    return `${player.username} is a Level ${player.level > 100 ? "Infinity" : player.level} player from ${player.region}.`;
    // write your code here
}
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
console.log(formatPlayerCard({
    username: "Lionel Messi",
    level: 1000000000000000000000,
    region: "Europe"
}));
//# sourceMappingURL=problem_12.js.map