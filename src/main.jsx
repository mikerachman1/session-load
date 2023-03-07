import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import Sessions from './components/Sessions'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Sessions />
  </React.StrictMode>,
)
