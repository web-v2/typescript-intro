import {Product, taxCalculation} from './6-function-destructuring';

const shoppingCart: Product[] = [
    {
    description: 'Nokia',
    price: 100
    },
    {
        description: 'Iphone',
        price: 350
    }
];


const [total, tax] = taxCalculation({products: shoppingCart, tax: 0.15})

console.log('Total', total);
console.log('Tax', tax);
//export {};