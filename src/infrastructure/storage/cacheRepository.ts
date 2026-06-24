// 1 hora en milisegundos (tiempo de vida del cache)
const TTL = 3600000

// Forma de lo que guardamos en localStorage: los datos + el momento en que se guardaron
interface CacheEntry<T> {
  data: T
  timestamp: number
}

export const cacheRepository = {
  // Recupera datos del cache si no han expirado
  // T es un genérico: se reemplaza por el tipo real al usarlo (ej: ProductSummary[])
  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key)
    if (!raw) return null

    const entry: CacheEntry<T> = JSON.parse(raw)
    // Si ha pasado más de 1 hora, borra y devuelve null (cache expirado)
    if (Date.now() - entry.timestamp > TTL) {
      localStorage.removeItem(key)
      return null
    }

    return entry.data
  },

  // Guarda datos en localStorage con el timestamp actual
  set<T>(key: string, data: T): void {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() }
    localStorage.setItem(key, JSON.stringify(entry))
  },
}