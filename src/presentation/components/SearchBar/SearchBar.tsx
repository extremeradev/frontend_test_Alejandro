import styles from './SearchBar.module.css'

// Props que recibe el SearchBar desde el padre (PLP)
interface SearchBarProps {
  value: string       // Texto actual del input
  onChange: (value: string) => void  // Función para actualizar el texto en el padre
}

// Barra de búsqueda para filtrar productos por marca o modelo
// El filtrado se hace en tiempo real conforme el usuario escribe
function SearchBar({ value, onChange }: SearchBarProps) {
  return <input
      className={styles.input}
      type="text"
      placeholder="Buscar por marca o modelo..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
}

export default SearchBar
