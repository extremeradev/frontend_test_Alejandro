import type { ProductDetail } from '../../../core/domain/models/product'
import styles from './ProductDescription.module.css'

interface ProductDescriptionProps {
  product: ProductDetail
}

// Muestra las especificaciones completas del producto en PDP
// Campos requeridos: marca, modelo, precio, CPU, RAM, OS, pantalla, batería, cámaras, dimensiones, peso
function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{product.brand} {product.model}</h1>
      <p className={styles.price}>{product.price} €</p>
      <dl className={styles.specs}>
        <dt>CPU</dt><dd>{product.cpu}</dd>
        <dt>RAM</dt><dd>{product.ram}</dd>
        <dt>Sistema Operativo</dt><dd>{product.os}</dd>
        <dt>Pantalla</dt><dd>{product.displayResolution}</dd>
        <dt>Batería</dt><dd>{product.battery}</dd>
        <dt>Cámaras</dt><dd>{Array.isArray(product.primaryCamera) ? product.primaryCamera.join(', ') : product.primaryCamera || '-'}</dd>
        <dt>Dimensiones</dt><dd>{product.dimentions}</dd>
        <dt>Peso</dt><dd>{product.weight || '-'}</dd>
      </dl>
    </div>
  )
}

export default ProductDescription
