import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import themeReducer from './themeSlice'

// Store global de Redux
// Aquí se registran todos los slices (reducers) de la aplicación
export const store = configureStore({
  reducer: {
    cart: cartReducer,  // slice del carrito: gestiona count y addToCart
    theme: themeReducer, // slice del botón que cambia el tema de la aplicación.
  },
})


// Tipos inferidos del store para usar en useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch