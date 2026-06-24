import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { AddToCartRequest } from '../../core/domain/models/cart'
import { cartApi } from '../api/cartApi'

// Estado inicial del carrito. Recupera el count desde localStorage o usa 0
interface CartState {
  count: number
  toast: string | null
}

const initialState: CartState = {
  count: Number(localStorage.getItem('cartCount')) || 0,
  toast: null
}

// Acción asíncrona: llama al API para añadir un producto
// createAsyncThunk genera automáticamente acciones pending/fulfilled/rejected
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (request: AddToCartRequest) => {
    const res = await cartApi.add(request)
    console.log("========== COUNT: "+res.count)
    return res.count  // devuelve el count que viene del API
  }
)

// Slice: define el nombre, estado inicial y cómo se modifica el estado
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Acción síncrona para establecer un count manualmente (poco usada)
    setCount(state, action) {
      state.count = action.payload
    },
    clearToast(state) {
      state.toast = null
    },
  },
  extraReducers: (builder) => {
    // Cuando addToCart se completa (fulfilled), asigna el count devuelto por el API
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.count = action.payload
      state.toast = 'Añadido al carrito'
      localStorage.setItem('cartCount', JSON.stringify(state.count))
    })
  },
})

export const { setCount, clearToast } = cartSlice.actions
export default cartSlice.reducer

