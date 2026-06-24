import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductImage from '../ProductImage'

const mockProduct = {
  id: '1',
  brand: 'Acer',
  model: 'Iconia',
  price: '170',
  imgUrl: 'https://example.com/img.jpg',
  cpu: '',
  ram: '',
  os: '',
  displayResolution: '',
  battery: '',
  primaryCamera: [],
  dimentions: '',
  weight: '',
  colors: [],
  options: { colors: [], storages: [] },
}

describe('ProductImage', () => {
  it('muestra la imagen del producto con el alt correcto', () => {
    render(<ProductImage product={mockProduct} />)

    const img = screen.getByAltText('Acer Iconia')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/img.jpg')
  })
})
