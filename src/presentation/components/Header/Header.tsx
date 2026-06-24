import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

// Cabecera de la aplicación. Se muestra en todas las páginas.
// Contiene: logo (enlace a inicio), breadcrumbs y contador del carrito.
function Header() {
  const location = useLocation()
  // Detecta si estamos en la página de detalle de producto
  const isDetail = location.pathname.startsWith('/product/')

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>📱</span>
          Shop
        </Link>
        <nav className={styles.breadcrumbs}>
          <Link to="/" className={styles.crumb}>Inicio</Link>
          {isDetail && <span className={styles.sep}>›</span>}
          {isDetail && <span className={styles.crumbActive}>Producto</span>}
        </nav>
      </div>
      <div className={styles.right}>
        <span className={styles.cart}>🛒 0</span>
      </div>
    </header>
  )
}

export default Header
