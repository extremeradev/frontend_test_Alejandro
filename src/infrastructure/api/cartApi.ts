import type { CartRepository } from '../../core/application/ports/cartRepository'

const BASE_URL = 'https://itx-frontend-test.onrender.com/api'

// Adaptador de API para el carrito. Implementa la interfaz CartRepository.
export const cartApi: CartRepository = {
  // Añade un producto al carrito. Envía id + colorCode + storageCode.
  // Devuelve { count: number } con el total de items en el carrito.
  async add(request) {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    })
    return res.json()
  },
}