"use strict";
// Problem 14 — Esports Tournament Player Stats
Object.defineProperty(exports, "__esModule", { value: true });
function getPlayerStats(player) {
    if (player.scores.length === 0) {
        return {
            name: player.name,
            average: 0,
            rank: "Rookie"
        };
    }
    const total = player.scores.reduce((acc, score) => { return acc + score; });
    let averageScore = total / player.scores.length;
    const playerRank = averageScore >= 80 ? "MVP" : "Rookie";
    return {
        name: player.name,
        average: averageScore,
        rank: playerRank
    };
}
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
console.log(getPlayerStats({
    name: "Alex",
    scores: []
}));
//# sourceMappingURL=problem_14.js.map