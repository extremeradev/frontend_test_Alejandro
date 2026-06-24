import { createSlice } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark'

// Tema inicial: recupera de localStorage o usa 'light' por defecto
const initialState: Theme = (localStorage.getItem('theme') as Theme) || 'light'

// Slice del tema: controla el modo claro/oscuro de la aplicación
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Alterna entre 'light' y 'dark'. Guarda en localStorage para persistencia.
    toggleTheme(state) {
      const next = state === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      return next  // devuelve el nuevo estado (primitivo, no se puede mutar)
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer