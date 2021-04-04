const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const productRoutes = require('./routes/productRoutes');

// DB connection
const connectdb = require('./config/db');
connectdb();

const app = express();
app.use(express.json()); // we allow json formate

// api url
app.use('/api/product',productRoutes)


const PORT = process.env.PORT || 5000;
app.use('/',(req,res)=> {res.json(`server is running on port ${PORT}`)});
app.listen(PORT , ()=> console.log(`server is running on port ${PORT}`));