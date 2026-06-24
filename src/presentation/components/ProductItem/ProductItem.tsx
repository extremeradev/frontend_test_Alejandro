import { Link } from 'react-router-dom'
import type { ProductSummary } from '../../../core/domain/models/product'
import useInView from '../../hooks/useInView'
import styles from './ProductItem.module.css'

interface ProductItemProps {
  product: ProductSummary
}

// Tarjeta individual de producto en el listado (PLP)
// Muestra: imagen, marca, modelo y precio.
// Aparece con animación al hacer scroll hasta ella.
function ProductItem({ product }: ProductItemProps) {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className={`${styles.card} ${inView ? styles.visible : ''}`}>
      <Link to={`/product/${product.id}`} className={styles.link}>
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
    </div>
  )
}

export default ProductItem
