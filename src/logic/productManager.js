import FileOperations from "../utility/fileoperations";

export default class ProductManager {

    constructor() {
        this.fileOperations = new FileOperations();
        this.path = './database/products.json';
    }

    async getProductList() {
        try {
            const data = await this.fileOperations.readFile(this.path);
            return data
        } catch (error) {
            console.error("Error reading product list:", error);
            return [];
        }
    }

    async saveProductList(products) {
        try {
            await this.fileOperations.writeFile(this.path, JSON.stringify(products));
        } catch (error) {
            console.error("Error writing product list:", error);
        }
    }

    async getAllProducts() {
        return await this.getProductList();
    }

    async getProductById(id) {
        const products = await this.getProductList();
        const product = products.find(product => product.productId === id);
        if (!product) {
            console.error(`Product with id ${id} not found`);
            return null;
        }
        return product;
    }

    async addProduct(product) {
        const products = await this.getProductList();
        products.push(product);
        await this.saveProductList(products);
    }

    async updateProduct(updatedProduct) {
        const products = await this.getProductList();
        const index = products.findIndex(product => product.productId === updatedProduct.productId);
        if (index !== -1) {
            products[index] = updatedProduct;
            await this.saveProductList(products);
        } else {
            console.error(`Product with id ${updatedProduct.productId} not found`);
        }
    }

    async deleteProduct(id) {
        const products = await this.getProductList();
        const filteredProducts = products.filter(product => product.productId !== id);
        await this.saveProductList(filteredProducts);
    }
}
