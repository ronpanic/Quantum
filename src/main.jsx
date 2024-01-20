import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider} from '@auth0/auth0-react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Auth0Provider domain='dev-wjks7wokno8hr2aw.us.auth0.com' clientId='005xmsHlEeTdMLE5zb9GWWqxGC8ZhJw2' redirectUrl={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>   
)
