const TTL = 3600000

interface CacheEntry<T> {
  data: T
  timestamp: number
}

export const cacheRepository = {
  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key)
    if (!raw) return null

    const entry: CacheEntry<T> = JSON.parse(raw)
    if (Date.now() - entry.timestamp > TTL) {
      localStorage.removeItem(key)
      return null
    }

    return entry.data
  },

  set<T>(key: string, data: T): void {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() }
    localStorage.setItem(key, JSON.stringify(entry))
  },
}