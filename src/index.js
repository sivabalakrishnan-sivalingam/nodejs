import Product from "./model/product.js";
import ProductManager from "./logic/ProductManager.js";

console.log("Starting the application...");

const productManager = new ProductManager();

console.log("ProductManager instance created.");

// Invoke the methods
console.log("All Products:", productManager.getAllProducts());

console.log("Product with ID 3:", productManager.getProductById(3));

productManager.addProduct(new Product(
    6,
    "New Product",
    "NEW-0001",
    "October 20, 2023",
    "Description of new product",
    99.99,
    5,
    "http://example.com/new_product.png"
));
console.log("After adding a new product:", productManager.getAllProducts());

productManager.updateProduct(new Product(
    2,
    "Updated Garden Cart",
    "GDN-0023",
    "March 18, 2019",
    "Updated description of garden cart",
    55,
    4.5,
    "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
));
console.log("After updating product with ID 2:", productManager.getAllProducts());

productManager.deleteProduct(1);
console.log("After deleting product with ID 1:", productManager.getAllProducts());

console.log("End of the application.");