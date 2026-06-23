import type { CartRepository } from '../../core/application/ports/cartRepository'

const BASE_URL = 'https://itx-frontend-test.onrender.com/api'

export const cartApi: CartRepository = {
  async add(request) {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    })
    return res.json()
  },
}