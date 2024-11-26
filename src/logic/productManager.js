import fs from 'fs';

export default class ProductManager {

    constructor() {
        this.path = './database/products.json';
    }

    getProductList() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error("Error reading product list:", error);
            return [];
        }
    }

    modifyProductList() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        } catch (error) {
            console.error("Error writing product list:", error);
        }
    }

    getAllProducts() {
        this.products = this.getProductList();
        return this.products;
    }

    getProductById(id) {
        this.products = this.getProductList();
        const product = this.products.find(product => product.productId === id);
        if (!product) {
            console.error(`Product with id ${id} not found`);
            return null;
        }
        return product;
    }

    addProduct(product) {
        this.products = this.getProductList();
        this.products.push(product);
        this.modifyProductList();
    }

    updateProduct(updatedProduct) {
        this.products = this.getProductList();
        const index = this.products.findIndex(product => product.productId === updatedProduct.productId);
        if (index !== -1) {
            this.products[index] = updatedProduct;
            this.modifyProductList();
        }
    }

    deleteProduct(id) {
        this.products = this.getProductList();
        this.products = this.products.filter(product => product.productId !== id);
        this.modifyProductList();
    }
}
