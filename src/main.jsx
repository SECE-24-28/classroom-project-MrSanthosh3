import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display from './Display.jsx'
import Display1 from './Display1.jsx'
import Display2 from './Display2.jsx'
import Display5 from './Display5.jsx'
import Array1 from './Array1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      // <App />
      // <Display1/>
      <Array1/>
    

       }
  


  </StrictMode>,
)
