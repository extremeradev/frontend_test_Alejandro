import SearchBar from '../../components/SearchBar/SearchBar'
import ProductItem from '../../components/ProductItem/ProductItem'
import styles from './PLP.module.css'
import { useState } from 'react'
import useProducts from '../../hooks/useProducts'

// Página de listado de productos (Product List Page)
// Muestra: barra de búsqueda + grid de tarjetas de producto
function PLP() {
  const [searchTerm, setSearchTerm] = useState('')
  const { products, loading, error } = useProducts(searchTerm)

  if (loading) return (
    <div className={styles.plp}>
      <div className={styles.spinner} />
    </div>
  )

  if (error) return (
    <div className={styles.plp}>
      <p>Error al cargar los productos</p>
    </div>
  )

  return (
    <div className={styles.plp}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default PLP
