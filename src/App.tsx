import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './presentation/components/Layout/Layout'
import PLP from './presentation/pages/PLP/PLP'
import PDP from './presentation/pages/PDP/PDP'
import { useSelector } from 'react-redux'
import type { RootState } from './infrastructure/store/store'
import { useEffect } from 'react'

function App() {
  const theme = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  },[theme])
  
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