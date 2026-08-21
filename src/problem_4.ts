// Problem 4 — Shopping Cart Calculator

interface Product {
    name :string;
    price : number;
}

const calculateCartTotal = (products: Product[]): number => {
 
    const total : number = products.reduce((total , item) => total + item.price, 0)
    return total;
 
}


const products1 = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
 
console.log(calculateCartTotal(products1));
// 2600
 
// another example:
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
 
console.log(calculateCartTotal(products2));
// 1750

