import type { ProductSummary, ProductDetail } from '../../domain/models/product'

// Puerto (interfaz) para el repositorio de productos
// Define los métodos que debe implementar cualquier adaptador de API o mock
export interface ProductRepository {
  getAll(): Promise<ProductSummary[]>
  getById(id: string): Promise<ProductDetail>
}
