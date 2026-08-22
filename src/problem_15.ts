// Problem 6 — Music App Feature Access

type Tier = "free" | "pro" | "premium";

function canAccessOfflineMode(tier: Tier): boolean {

    return tier === "free" ? false : true;
// write your code here
}

console.log(canAccessOfflineMode("free"))
console.log(canAccessOfflineMode("pro"))
console.log(canAccessOfflineMode("premium"))