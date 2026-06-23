import type { ProductSummary, ProductDetail } from '../../domain/models/product'

export interface ProductRepository {
  getAll(): Promise<ProductSummary[]>
  getById(id: string): Promise<ProductDetail>
}