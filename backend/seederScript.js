require('dotenv').config();

const connectdb = require('./config/db');
const productsData = require('./data/products')
const Product = require('./models/Product');
connectdb();
const importData = async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData)
        console.log("seeder data inserted");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

importData();