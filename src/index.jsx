import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './global/index.css'
import { store } from './store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
