// Problem 10 — Gaming Age Rating Checker


function getAgeRatingAccess(age: number): string {
 

    return age < 7 ? "E (Everyone)" : age <= 12 ? "E10+ (Everyone 10+)" : age < 17 ? "T (Teen)" : "M (Mature)" ;
    // write your code here
 
}


console.log(getAgeRatingAccess(5))
console.log(getAgeRatingAccess(10))
console.log(getAgeRatingAccess(15))
console.log(getAgeRatingAccess(20))