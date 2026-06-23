import type { ProductRepository } from '../../core/application/ports/productRepository'
import { cacheRepository } from '../storage/cacheRepository'

const BASE_URL = 'https://itx-frontend-test.onrender.com/api'

export const productApi: ProductRepository = {
  async getAll() {
    const cached = cacheRepository.get('products')
    if (cached) return cached

    const res = await fetch(`${BASE_URL}/product`)
    const data = await res.json()
    cacheRepository.set('products', data)
    return data
  },

  async getById(id: string) {
    const key = `product_${id}`
    const cached = cacheRepository.get(key)
    if (cached) return cached

    const res = await fetch(`${BASE_URL}/product/${id}`)
    const data = await res.json()
    cacheRepository.set(key, data)
    return data
  },
}