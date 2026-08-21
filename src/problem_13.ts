// Problem 13 — Music App Listening Time Tracker

interface Track{
    title: string;
    minutes: number;
}

function calculateTotalListeningTime(tracks: Track[]): number {
    return tracks.reduce((totalMin , tracks) => totalMin + tracks.minutes, 0);
// write your code here
}

const tracks1 = [
{ title: "Blinding Lights", minutes: 3 },
{ title: "Levitating", minutes: 4 },
{ title: "Peaches", minutes: 3 }
];
console.log(calculateTotalListeningTime(tracks1));
// 10


// another example:
const tracks2 = [
{ title: "Flowers", minutes: 3 },
{ title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks2));
// 7