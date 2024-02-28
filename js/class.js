var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(name) {
        this.userCart = [];
        this.userName = name;
    }
    ShoppingCart.prototype.addToCart = function (product, quantity) {
        var existingProduct = this.userCart.filter(function (singleProduct) {
            return singleProduct.name === product.name;
        });
        if (existingProduct.length) {
            this.userCart.forEach(function (cartItem) {
                if (cartItem.name === product.name) {
                    cartItem.quantity += quantity;
                    cartItem.totalPrice += (quantity * product.price);
                }
            });
        }
        else {
            this.userCart.push({
                name: product.name,
                price: product.price,
                quantity: quantity,
                totalPrice: (quantity * product.price)
            });
        }
        return this.userCart;
    };
    ShoppingCart.prototype.deleteFromCart = function (product) {
        var _a;
        // we are just updating cart by filtering the document
        this.userCart = (_a = this.userCart) === null || _a === void 0 ? void 0 : _a.filter(function (cartItem) {
            return product.name !== cartItem.name;
        });
        return this.userCart;
    };
    ShoppingCart.prototype.getUserCart = function () {
        return this.userCart;
    };
    ShoppingCart.prototype.getTotalAmount = function () {
        var totalAmount = 0;
        this.userCart.forEach(function (cartItem) {
            totalAmount += cartItem.totalPrice;
        });
        return totalAmount;
    };
    return ShoppingCart;
}());
// first we are creating two products 
var product1 = new Product("bottle", 5);
var product2 = new Product("water", 15);
// then we are creating cart by adding products
var firstUser = new ShoppingCart("safeer");
firstUser.addToCart(product1, 10);
firstUser.addToCart(product2, 10);
console.log("after adding products", firstUser.addToCart(product2, 70));
console.log(firstUser.getTotalAmount());
console.log("after deleting product1", firstUser.deleteFromCart(product1));
console.log("first user cart after all", firstUser.getUserCart());
console.log(firstUser.getTotalAmount());
