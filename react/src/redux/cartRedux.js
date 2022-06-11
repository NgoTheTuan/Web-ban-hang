import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        delelteProduct: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        },
        updateProduct: (state,action) => {
            const newCart = action.payload;
            const cartIndex = state.products.findIndex((item)=>item._id === newCart._id)

            if(cartIndex >=0){
                state.products[cartIndex] = newCart;
            }

            const newCarts = state.products.map((item)=> {
                return {...item}
            })

            let price=0;
            for(let i=0; i<newCarts.length; i++){
                price =price+ (newCarts[i].price * newCarts[i].quantity);
            }
            state.total = price;
        },
        deleteOneCartProduct: (state,action) => {
            const deleteCart = action.payload;
            const newCart = state.products.map((item)=> item._id !== deleteCart._id ? {...item} : undefined)
            const cart = newCart.filter((item)=>{
                return item !== undefined;
            })
            const price = deleteCart.quantity * deleteCart.price;
            state.products = cart;
            state.total = state.total - price;
            state.quantity = state.quantity - 1;
        },
    }

})

// Lay action ra
export const { addProduct, delelteProduct,updateProduct,deleteOneCartProduct } = cartSlice.actions;


export default cartSlice.reducer;