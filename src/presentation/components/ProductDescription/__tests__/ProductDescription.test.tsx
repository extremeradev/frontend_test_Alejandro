import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductDescription from '../ProductDescription'

const mockProduct = {
  id: '1',
  brand: 'Acer',
  model: 'Iconia',
  price: '170',
  imgUrl: '',
  cpu: 'Quad-core 1.25 GHz',
  ram: '1 GB RAM',
  os: 'Android 6.0',
  displayResolution: '5.0 pulgadas',
  battery: '2000 mAh',
  primaryCamera: ['8 MP', 'autofocus'],
  dimentions: '140 x 70 x 8 mm',
  weight: '150 g',
  colors: [],
  options: { colors: [], storages: [] },
}

describe('ProductDescription', () => {
  it('muestra el nombre del producto y el precio', () => {
    render(<ProductDescription product={mockProduct} />)

    expect(screen.getByText('Acer Iconia')).toBeInTheDocument()
    expect(screen.getByText('170 €')).toBeInTheDocument()
  })

  it('muestra todas las especificaciones', () => {
    render(<ProductDescription product={mockProduct} />)

    expect(screen.getByText('Quad-core 1.25 GHz')).toBeInTheDocument()
    expect(screen.getByText('1 GB RAM')).toBeInTheDocument()
    expect(screen.getByText('Android 6.0')).toBeInTheDocument()
    expect(screen.getByText('5.0 pulgadas')).toBeInTheDocument()
    expect(screen.getByText('2000 mAh')).toBeInTheDocument()
    expect(screen.getByText('8 MP, autofocus')).toBeInTheDocument()
    expect(screen.getByText('140 x 70 x 8 mm')).toBeInTheDocument()
    expect(screen.getByText('150 g')).toBeInTheDocument()
  })
})
