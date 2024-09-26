import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./global.css";
import { Provider } from 'react-redux';
import { store } from './store/index .ts';


const root = document.getElementById('root')

createRoot(root!).render(
    <StrictMode>
        <Provider store={store} >
            <App />
        </Provider>
    </StrictMode>
)
