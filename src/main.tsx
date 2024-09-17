import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root')

createRoot(root!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
