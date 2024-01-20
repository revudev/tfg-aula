import './index.css';//Base - componente - utilidades de tailwindcss.
import App from './App.jsx';//La App a renderizar.
import { createRoot } from 'react-dom/client';//Optimizar rendimiento mediante ejecución concurrente

const root = createRoot(document.querySelector("#root"));//Creación de la ruta de renderizado.
root.render(<App/>);//Renderizado del componente App con el id root