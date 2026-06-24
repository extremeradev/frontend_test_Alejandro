import { useParams, Link } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails'
import ProductImage from '../../components/ProductImage/ProductImage'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import ProductActions from '../../components/ProductActions/ProductActions'
import styles from './PDP.module.css'

// Página de detalle de producto (Product Detail Page)
// Muestra: imagen a la izquierda, descripción + acciones a la derecha
// La URL define qué producto mostrar: /product/:id
function PDP() {
  const { id } = useParams()
  const { product, loading, error } = useProductDetails(id)

  if (loading) return <div className={styles.pdp}><div className={styles.spinner} /></div>
  if (error) return <div className={styles.pdp}><p>Error al cargar el producto</p></div>
  if (!product) return <div className={styles.pdp}><p>Producto no encontrado</p></div>

  return (
    <div className={styles.pdp}>
      <Link to="/" className={styles.back}>← Volver a productos</Link>
      <div className={styles.columns}>
        <div className={styles.left}>
          <ProductImage product={product} />
        </div>
        <div className={styles.right}>
          <ProductDescription product={product} />
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  )
}

export default PDP
