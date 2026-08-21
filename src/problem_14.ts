// Problem 5 — Esports Tournament Player Stats

interface Player{
    name: string;
     scores: number[];
}

function getPlayerStats(player: Player): { name: string; average: number; rank: string }

{
    if (player.scores.length === 0) {
        return {
            name: player.name,
            average: 0,
            rank: "Rookie"
        };
    }
    const total = player.scores.reduce((acc , score) => {return acc + score});
    let averageScore = total/player.scores.length;
    const playerRank = averageScore >=80 ? "MVP" : "Rookie";

    return{
        name: player.name,
        average: averageScore,
        rank: playerRank
    }
}


console.log(
    getPlayerStats({
        name: "Nova",
        scores: [90, 85, 95, 80]
    })
);

console.log(
    getPlayerStats({
        name: "Zex",
        scores: [60, 55, 70, 50]
    })
);

console.log(
    getPlayerStats({
        name: "Alex",
        scores: []
    })
);