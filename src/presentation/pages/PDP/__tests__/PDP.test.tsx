import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../../../../infrastructure/store/cartSlice'
import PDP from '../PDP'

const store = configureStore({ reducer: { cart: cartReducer } })

// Mock del hook useProductDetails para no llamar al API real
vi.mock('../../../hooks/useProductDetails', () => ({
  default: () => ({
    product: {
      id: '1',
      brand: 'Acer',
      model: 'Iconia',
      price: '170',
      imgUrl: '',
      cpu: 'Quad-core',
      ram: '1 GB',
      os: 'Android',
      displayResolution: '5 pulgadas',
      battery: '2000 mAh',
      primaryCamera: ['8 MP'],
      dimentions: '140x70x8 mm',
      weight: '150 g',
      colors: [],
      options: { colors: [{ code: 1000, name: 'Black' }], storages: [{ code: 2000, name: '8 GB' }] },
    },
    loading: false,
    error: null,
  }),
}))

describe('PDP', () => {
  it('muestra los detalles del producto', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/1']}>
          <Routes>
            <Route path="/product/:id" element={<PDP />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Acer Iconia')).toBeInTheDocument()
    expect(screen.getByText('170 €')).toBeInTheDocument()
    expect(screen.getByText((t) => t.includes('Volver a productos'))).toBeInTheDocument()
  })

  it('muestra enlace para volver a productos', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/1']}>
          <Routes>
            <Route path="/product/:id" element={<PDP />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    const link = screen.getByText((t) => t.includes('Volver a productos'))
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
