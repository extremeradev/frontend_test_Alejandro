import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './infrastructure/store/store'
import './index.css'
import App from './App.tsx'

// Punto de entrada de la aplicación
// Provider envuelve toda la app con el store de Redux para que cualquier componente pueda acceder al estado global
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
