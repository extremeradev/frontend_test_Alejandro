// Petición que se envía al API al añadir un producto al carrito
export interface AddToCartRequest {
  id: string
  colorCode: number
  storageCode: number
}

// Respuesta del API después de añadir: devuelve el número total de items en el carrito
export interface AddToCartResponse {
  count: number
}
