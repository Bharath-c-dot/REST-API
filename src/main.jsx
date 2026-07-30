import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Api from './Api.jsx'
import ErrorHandlingData from './ErrorHandlingData.jsx'

createRoot(document.getElementById('root')).render(
    
    //  <Api/>
    <ErrorHandlingData/>


)
