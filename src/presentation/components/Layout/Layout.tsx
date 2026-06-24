import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './Layout.module.css'
import Toast from '../Toast/Toast'


// Layout que envuelve todas las páginas
// Renderiza el Header y luego el contenido de la ruta activa (<Outlet />)
function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Toast />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
