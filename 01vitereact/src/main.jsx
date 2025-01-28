import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElenent = React.createElement(
  'a',
  {href : 'https://google.com', target:'_blank'},
  'visit google' 
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    reactElenent
  // </StrictMode>,
)
