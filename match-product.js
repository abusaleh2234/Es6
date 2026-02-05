const products = [
    { id: 1, name: "iPhone 14", price: 120000 },
    { id: 4, name: "MacBook Air M1", price: 135000 },
    { id: 5, name: "Dell Inspiron 15", price: 75000 },
    { id: 2, name: "Samsung Galaxy S23 phone", price: 110000 },
    { id: 3, name: "Xiaomi Redmi Note 12 phone", price: 28000 },
    { id: 6, name: "HP Pavilion x360", price: 82000 },
    { id: 3, name: "Xiaomi Note 12 phone", price: 28000 },

];

function matchProducts(products, search) {
    const matches = []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matches.push(product)
        }


    }
    return matches
}
const result = matchProducts(products, "phone")
console.log(result);
