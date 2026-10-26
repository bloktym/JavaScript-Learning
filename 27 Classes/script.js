// class = (ES6 feature) provieds a more structured and cleaner
//          way to work with objects compared to traditional constructor
//          functions. Ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;


    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calcTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product2.calcTotal(0.05);
const tota2 = product2.calcTotal(0.05);
const tota3 = product2.calcTotal(0.05);
console.log(`Your total with tax is R${total.toFixed(2)}`);
