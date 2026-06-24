import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { AddToCartRequest } from '../../core/domain/models/cart'
import { cartApi } from '../../infrastructure/api/cartApi'

// Define la forma del context: count (número de items) y addToCart (función para añadir)
interface CartContextType {
  count: number
  addToCart: (request: AddToCartRequest) => Promise<void>
}

// Crea el contexto con valor inicial null (se llenará en el Provider)
const CartContext = createContext<CartContextType | null>(null)

// Provider que envuelve la aplicación y da acceso al carrito desde cualquier componente
export function CartProvider({ children }: { children: ReactNode }) {
  // Inicializa count desde localStorage o 0 si no hay datos guardados
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('cartCount')
    return saved ? Number(saved) : 0
  })

  // Cada vez que count cambia, lo guarda en localStorage para persistencia entre recargas
  useEffect(() => {
    localStorage.setItem('cartCount', JSON.stringify(count))
  }, [count])

  // Función para añadir un producto al carrito
  // Llama al API (siempre devuelve 1) e incrementa el contador localmente
  const addToCart = async (request: AddToCartRequest) => {
    const res = await cartApi.add(request)
    console.log('esto es el RES: => ', JSON.stringify(res))
    //await cartApi.add(request)
    setCount((prev) => prev + 1)
  }

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado para consumir el contexto del carrito
// Si se usa fuera del Provider, lanza un error
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}
