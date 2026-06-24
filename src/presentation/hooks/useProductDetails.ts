import { useState, useEffect } from 'react';
import type { ProductDetail } from '../../core/domain/models/product'
import { productApi } from "../../infrastructure/api/productApi";

// Hook personalizado para obtener el detalle de un producto por su id
// id puede ser undefined (cuando la URL no tiene parámetro)
// Devuelve: { product, loading, error }
function useProductDetails(id: string | undefined){
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Se ejecuta cada vez que id cambia
  // Si id es undefined, no hace nada (early return)
  useEffect(() => {
    if (!id) return

    productApi.getById(id)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false))

  }, [id])

  return { product, loading, error}

}

export default useProductDetails;
