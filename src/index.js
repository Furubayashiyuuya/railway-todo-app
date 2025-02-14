import React from 'react'

import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
