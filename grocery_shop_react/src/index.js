import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import { AppContext, state } from './app_context'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AppContext.Provider value={state}>
    <App />
  </AppContext.Provider>
)
// registerServiceWorker()
