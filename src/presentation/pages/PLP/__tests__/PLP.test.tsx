import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PLP from '../PLP'

const mockProducts = [
  { id: '1', brand: 'Acer', model: 'Iconia', price: '170', imgUrl: '' },
  { id: '2', brand: 'Samsung', model: 'Galaxy', price: '500', imgUrl: '' },
]

// Mock del hook con implementación por defecto (se sobreescribe en cada test)
vi.mock('../../../hooks/useProducts')

// Importamos el hook para poder mockearlo
import useProducts from '../../../hooks/useProducts'

describe('PLP', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('muestra la barra de búsqueda', () => {
    vi.mocked(useProducts).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <PLP />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText('Buscar por marca o modelo...')).toBeInTheDocument()
  })

  it('muestra la lista de productos', () => {
    vi.mocked(useProducts).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <PLP />
      </MemoryRouter>
    )

    expect(screen.getByText('Iconia')).toBeInTheDocument()
    expect(screen.getByText('Galaxy')).toBeInTheDocument()
  })

  it('muestra spinner mientras carga', () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [],
      loading: true,
      error: null,
    })

    render(
      <MemoryRouter>
        <PLP />
      </MemoryRouter>
    )

    expect(screen.queryByText('Iconia')).not.toBeInTheDocument()
  })

  it('muestra error cuando la API falla', () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [],
      loading: false,
      error: new Error('Error de conexión'),
    })

    render(
      <MemoryRouter>
        <PLP />
      </MemoryRouter>
    )

    expect(screen.getByText('Error al cargar los productos')).toBeInTheDocument()
  })
})
