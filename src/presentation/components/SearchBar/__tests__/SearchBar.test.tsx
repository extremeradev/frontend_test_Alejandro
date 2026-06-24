import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
  it('muestra el input de búsqueda', () => {
    render(<SearchBar value="" onChange={() => {}} />)

    expect(screen.getByPlaceholderText('Buscar por marca o modelo...')).toBeInTheDocument()
  })

  it('llama a onChange al escribir', () => {
    const onChange = vi.fn()
    render(<SearchBar value="" onChange={onChange} />)

    const input = screen.getByPlaceholderText('Buscar por marca o modelo...')
    fireEvent.change(input, { target: { value: 'Acer' } })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('Acer')
  })

  it('muestra el valor recibido por prop', () => {
    render(<SearchBar value="iPhone" onChange={() => {}} />)

    expect(screen.getByDisplayValue('iPhone')).toBeInTheDocument()
  })
})
