import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../infrastructure/store/store'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../infrastructure/store/themeSlice'

// Cabecera de la aplicación. Se muestra en todas las páginas.
// Contiene: logo (enlace a inicio), breadcrumbs, contador del carrito y botón de tema.
function Header() {
  const count = useSelector((state: RootState) => state.cart.count)
  const theme = useSelector((state: RootState) => state.theme)
  const location = useLocation()
  const isDetail = location.pathname.startsWith('/product/')
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <img src="/cdnlogo.com_react.png" alt="" className={styles.logoIcon} />
          <span className={styles.logoText}>SHOP</span>
        </Link>
        <div className={styles.separator} />
        <nav className={styles.breadcrumbs}>
          <Link to="/" className={styles.crumb}>Inicio</Link>
          {isDetail && <span className={styles.sep}>›</span>}
          {isDetail && <span className={styles.crumbActive}>Producto</span>}
        </nav>
      </div>
      <div className={styles.right}>
        <button
          className={styles.themeBtn}
          onClick={() => dispatch(toggleTheme())}
          aria-label="Cambiar tema"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <span className={styles.cart}>🛒 {count}</span>
      </div>
    </header>
  )
}

export default Header
