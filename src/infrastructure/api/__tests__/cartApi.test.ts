import { describe, it, expect, vi, beforeEach } from 'vitest'
import { cartApi } from '../cartApi'

describe('cartApi', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('envía una petición POST y devuelve el número de items en el carrito', async () => {
    const mockResponse = { count: 3 }

    const mockFetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    })
    vi.stubGlobal('fetch', mockFetch)

    const result = await cartApi.add({
      id: '123',
      colorCode: 1000,
      storageCode: 2000,
    })

    expect(result).toEqual({ count: 3 })

    expect(mockFetch).toHaveBeenCalledWith(
      'https://itx-frontend-test.onrender.com/api/cart',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: '123', colorCode: 1000, storageCode: 2000 }),
      }
    )
  })
})