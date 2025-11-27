import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Products from "./Products.json";

const ProductReducer = (state = Products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialCartState = {
  count: 0,
  items: []
};

const CartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload;
      
      // Ensure we have a valid product ID (check both id and productId)
      const productId = product.id || product.productId || `item-${Date.now()}`;
      
      // Create a unique ID for the cart item
      const cartItemId = `cart-item-${productId}-${Date.now()}`;
      
      // Check if this exact product is already in the cart
      const existingItemIndex = state.items.findIndex(
        item => (item.id === productId || item.productId === productId || item.id === `cart-item-${productId}`)
      );
      
      if (existingItemIndex >= 0) {
        // If product exists, update its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 1) + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          count: state.count + 1
        };
      }
      
      // If it's a new product, add it to the cart
      return {
        ...state,
        items: [
          ...state.items, 
          { 
            ...product,
            id: cartItemId, // Use the generated cart item ID
            productId: productId, // Ensure we store the original product ID
            quantity: 1 
          }
        ],
        count: state.count + 1
      };
    }
      
    case 'REMOVE_FROM_CART': {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        count: Math.max(0, state.count - itemToRemove.quantity)
      };
    }
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
      
    case 'CLEAR_CART':
      return { ...initialCartState };
      
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // Only persist the cart reducer
};

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);