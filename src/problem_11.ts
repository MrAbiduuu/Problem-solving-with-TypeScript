// Problem 11 — Gaming Age Rating Checker


function getSignalStatus(strength: number): string {
 

    return strength <= 20 ? "Weak" : strength <= 50 ? "Fair" : strength <= 80 ? "Good" : "Excellent" ;
    // write your code here
 
}


console.log(getSignalStatus(10));
console.log(getSignalStatus(35));
console.log(getSignalStatus(65));
console.log(getSignalStatus(95));

console.log(getSignalStatus(20));
console.log(getSignalStatus(21));
console.log(getSignalStatus(80));
console.log(getSignalStatus(81));
