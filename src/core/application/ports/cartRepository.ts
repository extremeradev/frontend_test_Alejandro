import type { AddToCartRequest, AddToCartResponse } from '../../domain/models/cart'

// Puerto (interfaz) para el repositorio del carrito
// Define el método que debe implementar cualquier adaptador de API
export interface CartRepository {
  add(request: AddToCartRequest): Promise<AddToCartResponse>
}
