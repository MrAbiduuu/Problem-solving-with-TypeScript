"use strict";
// Problem 7 — Product Category Search
Object.defineProperty(exports, "__esModule", { value: true });
const findProducts = (products, category) => {
    return products.filter(product => product.category === category);
    // write your code here
};
const categoryProducts = [
    {
        name: "iPhone 15",
        price: 90000,
        category: "phone"
    },
    {
        name: "Galaxy S24",
        price: 85000,
        category: "phone"
    },
    {
        name: "MacBook Air",
        price: 120000,
        category: "laptop"
    },
    {
        name: "Dell XPS",
        price: 110000,
        category: "laptop"
    }
];
console.log(findProducts(categoryProducts, "phone"));
console.log(findProducts(categoryProducts, "laptop"));
//# sourceMappingURL=problem_7.js.map