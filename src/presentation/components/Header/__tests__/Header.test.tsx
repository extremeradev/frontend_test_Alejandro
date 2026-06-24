import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../../../../infrastructure/store/cartSlice'
import themeReducer from '../../../../infrastructure/store/themeSlice'
import Header from '../Header'

const store = configureStore({
  reducer: { cart: cartReducer, theme: themeReducer },
})

describe('Header', () => {
  it('muestra el logo y enlace a inicio', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Inicio')).toBeInTheDocument()
  })

  it('muestra breadcrumb de producto en PDP', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/123']}>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Producto')).toBeInTheDocument()
  })

  it('no muestra breadcrumb de producto en PLP', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.queryByText('Producto')).not.toBeInTheDocument()
  })

  it('muestra el contador del carrito', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/🛒/)).toBeInTheDocument()
  })
})
