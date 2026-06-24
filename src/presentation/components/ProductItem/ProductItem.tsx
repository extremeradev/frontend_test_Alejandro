import { Link } from 'react-router-dom'
import type { ProductSummary } from '../../../core/domain/models/product'
import styles from './ProductItem.module.css'

interface ProductItemProps {
  product: ProductSummary
}

// Tarjeta individual de producto en el listado (PLP)
// Muestra: imagen, marca, modelo y precio
// Al hacer clic navega al detalle del producto (PDP)
function ProductItem({ product }: ProductItemProps) {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <img
        className={styles.image}
        src={product.imgUrl}
        alt={`${product.brand} ${product.model}`}
      />
      <div className={styles.info}>
        <span className={styles.brand}>{product.brand}</span>
        <span className={styles.model}>{product.model}</span>
        <span className={styles.price}>{product.price} €</span>
      </div>
    </Link>
  )
}

export default ProductItem
