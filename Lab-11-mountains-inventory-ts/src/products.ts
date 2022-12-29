export interface Products{
    name: string;
    price: number;


}
const products: Products[] = [
    { name: "milk", price: 5.99 },
    { name: "eggs", price: 10.99 },
    { name: "tomatoes", price: 3.99},
        // { name: "motor", price: 10.00 },
        // { name: "sensor", price: 12.50 },
        // { name: "motor", price: 1.00 }
    ];

function calcAverageProductPrice(productArray: Products[]) { 
    if (productArray.length === 0) {
        return 0
    }
    else {
        let total = 0;
        for (
            let i = 0; i < productArray.length; i++
        ) {
            total += productArray[i].price
        }
        return total / productArray.length;
    }
    const average = calcAverageProductPrice(products)
        console.log(products)
    }
    
    // let result: number = 0
    // for (let item of array) {
    //     result += item.price
    // }
    // return result / array.length

console.log(calcAverageProductPrice(products));

export { calcAverageProductPrice, products }