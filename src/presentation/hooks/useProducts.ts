import { useState, useEffect } from "react";
import { productApi } from "../../infrastructure/api/productApi";
import type { ProductSummary } from "../../core/domain/models/product";

// Hook personalizado para obtener y filtrar productos
// searchTerm: texto de búsqueda para filtrar por marca o modelo
// Devuelve: { products, loading, error }
function useProducts(searchTerm: string) {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Se ejecuta una vez al montar el componente
  // Obtiene todos los productos del API (con cache)
  useEffect(() => {
    productApi
      .getAll()
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  // Filtra los productos por marca o modelo según el searchTerm
  // La comparación es sin distinguir mayúsculas/minúsculas
  const filtered = searchTerm
    ? products.filter(
      (p) =>
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.model.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    : products;

  return { products: filtered, loading, error };
}

export default useProducts;
