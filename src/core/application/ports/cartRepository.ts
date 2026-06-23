// src/core/application/ports/cartRepository.ts
import type { AddToCartRequest, AddToCartResponse } from '../../domain/models/cart'

export interface CartRepository {
  add(request: AddToCartRequest): Promise<AddToCartResponse>
}