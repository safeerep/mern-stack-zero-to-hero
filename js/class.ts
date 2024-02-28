class Product {
    // defining two properties of product as public to access from out of the class also;
    public name: string;
    public price: number;

    constructor ( name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

interface Cart extends Product {
    quantity: number;
    totalPrice: number;
}

class ShoppingCart {
    public userName: string;
    public userCart: Cart[] = []

    constructor (name: string) {
        this.userName = name;
    }

    public addToCart (product: Product, quantity: number) {
        const existingProduct = this.userCart.filter((singleProduct: Cart) => {
            return singleProduct.name === product.name;
        })
        if (existingProduct.length) {
            this.userCart.forEach((cartItem: Cart) => {
                if (cartItem.name === product.name) {
                    cartItem.quantity += quantity;
                    cartItem.totalPrice += ( quantity * product.price)
                }
            })
        } else {
            this.userCart.push({
                name: product.name,
                price: product.price,
                quantity: quantity,
                totalPrice: (quantity * product.price)
            })
        }
        return this.userCart;
    }

    public deleteFromCart (product: Product) {
        // we are just updating cart by filtering the document
        this.userCart = this.userCart?.filter((cartItem: Cart) => {
            return product.name !== cartItem.name;
        })
        return this.userCart;
    }

    public getUserCart () {
        return this.userCart;
    }

    public getTotalAmount () {
        let totalAmount = 0;
        this.userCart.forEach((cartItem: Cart) => {
            totalAmount += cartItem.totalPrice;
        })
        return totalAmount;
    }
}

// first we are creating two products 
const product1 = new Product("bottle", 5)
const product2 = new Product("water", 15)

// then we are creating cart by adding products
const firstUser = new ShoppingCart("safeer")
firstUser.addToCart(product1, 10)
firstUser.addToCart(product2, 10)

console.log("after adding products", firstUser.addToCart(product2, 70));
console.log(firstUser.getTotalAmount());
 
console.log("after deleting product1",firstUser.deleteFromCart(product1));


console.log("first user cart after all",firstUser.getUserCart());
console.log(firstUser.getTotalAmount());
