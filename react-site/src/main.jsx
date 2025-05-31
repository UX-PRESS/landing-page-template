import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
export default function Main({ children }) {
  return (
    <main className="pt-20"> {/* Ajuste o padding conforme altura da navbar */}
      {children}
    </main>
  );
}
