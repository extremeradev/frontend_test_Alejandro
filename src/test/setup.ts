// Configuración global de tests
// Se ejecuta antes de todos los tests para preparar el entorno

import '@testing-library/jest-dom'

// Mock de localStorage para los tests (jsdom no lo incluye por defecto)
class LocalStorageMock {
  private store: Record<string, string> = {}
  clear() { this.store = {} }
  getItem(key: string) { return this.store[key] ?? null }
  setItem(key: string, value: string) { this.store[key] = value }
  removeItem(key: string) { delete this.store[key] }
}

Object.defineProperty(globalThis, 'localStorage', { value: new LocalStorageMock() })

// Mock de IntersectionObserver para los tests (jsdom no lo incluye)
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(globalThis, 'IntersectionObserver', {
  value: IntersectionObserverMock,
})