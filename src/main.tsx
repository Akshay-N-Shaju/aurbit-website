import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './styles.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element missing')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const hasServerMarkup = [...root.childNodes].some((node) => node.nodeType === Node.ELEMENT_NODE)
if (hasServerMarkup) hydrateRoot(root, app)
else {
  root.replaceChildren()
  createRoot(root).render(app)
}
