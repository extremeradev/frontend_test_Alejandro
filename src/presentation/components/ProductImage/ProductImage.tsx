import type { ProductDetail } from '../../../core/domain/models/product'
import styles from './ProductImage.module.css'

interface ProductImageProps {
  product: ProductDetail
}

// Muestra la imagen del producto en la página de detalle (PDP)
function ProductImage({ product }: ProductImageProps) {
  return (
    <img
      className={styles.image}
      src={product.imgUrl}
      alt={`${product.brand} ${product.model}`}
    />
  )
}

export default ProductImage
