import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../../../../infrastructure/store/cartSlice'
import ProductActions from '../ProductActions'

const mockProduct = {
  id: '1',
  brand: 'Acer',
  model: 'Iconia',
  price: '170',
  imgUrl: '',
  cpu: '',
  ram: '',
  os: '',
  displayResolution: '',
  battery: '',
  primaryCamera: [],
  dimentions: '',
  weight: '',
  colors: [],
  options: {
    colors: [{ code: 1000, name: 'Black' }, { code: 1001, name: 'White' }],
    storages: [{ code: 2000, name: '8 GB' }],
  },
}

// Crea un store de prueba para que Redux funcione en el test
const store = configureStore({ reducer: { cart: cartReducer } })

describe('ProductActions', () => {
  it('muestra los selectores de color y almacenamiento', () => {
    render(
      <Provider store={store}>
        <ProductActions product={mockProduct} />
      </Provider>
    )

    expect(screen.getByText('Black')).toBeInTheDocument()
    expect(screen.getByText('White')).toBeInTheDocument()
    expect(screen.getByText('8 GB')).toBeInTheDocument()
  })

  it('muestra el botón de añadir al carrito', () => {
    render(
      <Provider store={store}>
        <ProductActions product={mockProduct} />
      </Provider>
    )

    expect(screen.getByText('Añadir al carrito')).toBeInTheDocument()
  })

  it('el botón dispara addToCart al hacer clic', () => {
    // Mock de fetch para que cartApi.add no falle
    globalThis.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ count: 1 }),
    })

    render(
      <Provider store={store}>
        <ProductActions product={mockProduct} />
      </Provider>
    )

    fireEvent.click(screen.getByText('Añadir al carrito'))
    expect(globalThis.fetch).toHaveBeenCalled()
  })
})
