import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './presentation/components/Layout/Layout'
import PLP from './presentation/pages/PLP/PLP'
import PDP from './presentation/pages/PDP/PDP'

// Componente principal de la aplicación
// Configura el enrutador con dos rutas:
//   /            → PLP (lista de productos)
//   /product/:id → PDP (detalle del producto)
// Ambas comparten el mismo Layout (Header + contenido)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PLP />} />
          <Route path="/product/:id" element={<PDP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App