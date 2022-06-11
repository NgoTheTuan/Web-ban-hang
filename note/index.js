const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connect Success!");
}).catch((err) => {
    console.log(err)
})

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);


app.listen(process.env.PORT || 4000, () => {
    console.log('Backend server is running')
})
