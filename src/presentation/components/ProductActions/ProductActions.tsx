import { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { ProductDetail } from '../../../core/domain/models/product'
import { addToCart } from '../../../infrastructure/store/cartSlice'
import type { AppDispatch } from '../../../infrastructure/store/store'
import styles from './ProductActions.module.css'

interface ProductActionsProps {
  product: ProductDetail
}

// Componente de acciones del producto en PDP
// Muestra selectores de color y almacenamiento, y botón para añadir al carrito
// Usa dispatch de Redux para llamar a addToCart
function ProductActions({ product }: ProductActionsProps) {
  const dispatch = useDispatch<AppDispatch>()
  // Selecciona la primera opción por defecto si existe
  const firstColor = product.options?.colors?.[0]
  const firstStorage = product.options?.storages?.[0]
  const [selectedColor, setSelectedColor] = useState(firstColor?.code ?? 0)
  const [selectedStorage, setSelectedStorage] = useState(firstStorage?.code ?? 0)

  // Al hacer clic en "Añadir al carrito", dispara la acción asíncrona de Redux
  // addToCart hace el POST al API y actualiza el count en el store
  const handleAdd = () => {
    dispatch(addToCart({
      id: product.id,
      colorCode: selectedColor,
      storageCode: selectedStorage,
    }))
  }

  return (
    <div className={styles.actions}>
      <div className={styles.selector}>
        <label className={styles.label}>Color</label>
        <select
          className={styles.select}
          value={selectedColor}
          onChange={(e) => setSelectedColor(Number(e.target.value))}
        >
          {product.options?.colors?.map((c) => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className={styles.selector}>
        <label className={styles.label}>Almacenamiento</label>
        <select
          className={styles.select}
          value={selectedStorage}
          onChange={(e) => setSelectedStorage(Number(e.target.value))}
        >
          {product.options?.storages?.map((s) => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </select>
      </div>

      <button className={styles.button} onClick={handleAdd}>Añadir al carrito</button>
    </div>
  )
}

export default ProductActions
