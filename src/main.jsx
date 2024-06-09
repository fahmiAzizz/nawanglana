import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import './index.css'
import Bridge from './components/Bridge.jsx'
import Akad from './components/Akad.jsx'
import Gift from './components/Gift.jsx'
import Wish from './components/Wish.jsx'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card />
    <Header />
    <Bridge />
    <Akad />
    <Gift />
    <Wish />
  </React.StrictMode>,
)
