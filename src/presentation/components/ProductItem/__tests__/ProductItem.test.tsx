import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductItem from '../ProductItem'

// Producto de prueba simulado
const mockProduct = {
  id: '123',
  brand: 'Acer',
  model: 'Iconia Talk S',
  price: '170',
  imgUrl: 'https://example.com/image.jpg',
}

describe('ProductItem', () => {
  // Verifica que se muestran la marca, modelo y precio del producto
  it('muestra la información del producto', () => {
    render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )

    expect(screen.getByText('Acer')).toBeInTheDocument()
    expect(screen.getByText('Iconia Talk S')).toBeInTheDocument()
    expect(screen.getByText('170 €')).toBeInTheDocument()
  })

  // Verifica que la imagen tiene el src y alt correctos
  it('muestra la imagen del producto', () => {
    render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )

    const img = screen.getByAltText('Acer Iconia Talk S')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  // Verifica que el enlace apunta a la ruta de detalle del producto
  it('navega al detalle del producto al hacer clic', () => {
    render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/product/123')
  })
})
