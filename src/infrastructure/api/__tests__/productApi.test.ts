import { describe, it, expect, beforeEach, vi } from 'vitest'
import { productApi } from '../productApi'

const mockProducts = [
  { id: '1', brand: 'Acer', model: 'Iconia', price: '170', imgUrl: '' },
]

describe('productApi', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('haces fetch en productos de la API y los capturas', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockProducts),
    })
    vi.stubGlobal('fetch', mockFetch)

    const result = await productApi.getAll()

    expect(result).toEqual(mockProducts)
    expect(mockFetch).toHaveBeenCalledTimes(1)

    const cached = JSON.parse(localStorage.getItem('products')!)
    expect(cached.data).toEqual(mockProducts)
  })

  it('devuelve datos cacheados sin llamar a la API', async () => {
    localStorage.setItem(
      'products',
      JSON.stringify({ data: mockProducts, timestamp: Date.now() })
    )

    const mockFetch = vi.fn()
    vi.stubGlobal('fetch', mockFetch)

    const result = await productApi.getAll()

    expect(result).toEqual(mockProducts)
    expect(mockFetch).not.toHaveBeenCalled()
  })
})