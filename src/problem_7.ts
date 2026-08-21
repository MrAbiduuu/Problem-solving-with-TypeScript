// Problem 7 — Product Category Search

interface Product{
    name : string;
    price : number;
    category : string;
}

const findProducts = (products: Product[], category: string) : Product[] => {

    return products.filter(product => product.category === category);

 // write your code here

}


const categoryProducts: Product[] = [
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
