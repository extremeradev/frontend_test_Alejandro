// Importa las funciones de vitest para definir tests
import { describe, it, expect } from 'vitest'
// render: monta un componente React en un DOM virtual
// screen: permite buscar elementos en el DOM renderizado
import { render, screen } from '@testing-library/react'
// MemoryRouter: router falso que no depende del navegador
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header'

// Grupo de tests para el componente Header
describe('Header', () => {
  // Verifica que el logo y el enlace "Inicio" se muestran siempre
  it('muestra el logo y enlace a inicio', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Inicio')).toBeInTheDocument()
  })

  // Verifica que en la ruta /product/:id se muestra el breadcrumb "Producto"
  it('muestra breadcrumb de producto en PDP', () => {
    render(
      <MemoryRouter initialEntries={['/product/123']}>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Producto')).toBeInTheDocument()
  })

  // Verifica que en la ruta / NO se muestra el breadcrumb "Producto"
  it('no muestra breadcrumb de producto en PLP', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )

    // queryByText devuelve null si no encuentra el texto (no lanza error)
    expect(screen.queryByText('Producto')).not.toBeInTheDocument()
  })

  // Verifica que el icono del carrito se muestra
  it('muestra el contador del carrito', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText(/🛒/)).toBeInTheDocument()
  })
})
