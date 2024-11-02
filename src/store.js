import{configureStore,createSlice} from '@reduxjs/toolkit'

const productSlice=createSlice({
    name:'products',
    initialState:{
        Veg:[
            {name:'pannertikka',price:200.5},
            {name:'samosa',price:100.0},
            {name:'biryani',price:250.0},
            {name:'chepathi',price:60.00},
            {name:'brijal fry',price:60.0}
        
        ],
        nonVeg:[
            {name:'chicken',price:200.6},
            {name:'motton',price:800.89},
            {name:'fish',price:300.6},
            {name:'prawns',price:300.89},
            {name:'craps',price:600.6}
        ],

    },
    reducers:{}

});

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status=state.find((item)=>item.name===action.payload.name);
            if(status)
            {
                status.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1})
            }
        },
        decrement: (state, action) => {
            const existingItem = state.find((item) => item.name === action.payload.name);
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity -= 1;
            } else{
              return state.filter((item) => item.name !== action.payload.name);
            }
        },
        remove:(state,action)=>
        {
            return state.filter((item) => item.name !== action.payload.name);
        }
    }
})

const store=configureStore({
    reducer:
    {
        products:productSlice.reducer,
        cart:cartSlice.reducer
    }
})

export const {addToCart,decrement,remove}=cartSlice.actions;

export default store
