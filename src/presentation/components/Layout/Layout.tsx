import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './Layout.module.css'

// Layout que envuelve todas las páginas
// Renderiza el Header y luego el contenido de la ruta activa (<Outlet />)
function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
