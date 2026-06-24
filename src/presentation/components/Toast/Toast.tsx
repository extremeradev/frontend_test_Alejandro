import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../../infrastructure/store/store'
import { clearToast } from '../../../infrastructure/store/cartSlice'
import styles from './Toast.module.css'

// Toast de notificación que aparece al añadir un producto al carrito
// Desaparece automáticamente después de 2 segundos
function Toast() {
  const dispatch = useDispatch()
  const message = useSelector((state: RootState) => state.cart.toast)

  // Cuando message cambia (se asigna un texto), inicia un temporizador que lo limpia a los 2s
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => dispatch(clearToast()), 2000)
    return () => clearTimeout(timer)  // limpia el timer si el componente se desmonta
  }, [message, dispatch])

  if (!message) return null

  return (
    <div className={styles.toast}>{message}</div>
  )
}

export default Toast