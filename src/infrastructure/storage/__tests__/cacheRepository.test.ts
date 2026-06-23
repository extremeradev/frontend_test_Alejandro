import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cacheRepository } from '../cacheRepository'

describe('cacheRepository', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('guarda en cache y recupera el dato', () => {
    cacheRepository.set('test', { name: 'hola' })
    expect(cacheRepository.get('test')).toEqual({ name: 'hola' })
  })

  it('devuelve nulo si la key no existe', () => {
    expect(cacheRepository.get('nonexistent')).toBeNull()
  })

  it('devuelve null y elimina el item si TTL se pasa de tiempo', () => {
    vi.useFakeTimers()
    cacheRepository.set('test', 'data')

    vi.advanceTimersByTime(3600000 + 1)

    expect(cacheRepository.get('test')).toBeNull()
    expect(localStorage.getItem('test')).toBeNull()
    vi.useRealTimers()
  })
})