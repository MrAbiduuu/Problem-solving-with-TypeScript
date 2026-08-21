// Problem 12 — Esports Player Profile Card

interface Player{
    username : string;
    level : number;
    region : string;

}

function formatPlayerCard(player: Player): string {

    return `${player.username} is a Level ${player.level > 100? "Infinity" : player.level } player from ${player.region}.`;
    // write your code here
 
}
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}))


console.log(formatPlayerCard({
    username: "Lionel Messi",
    level: 1000000000000000000000,
    region: "Europe"
}))

