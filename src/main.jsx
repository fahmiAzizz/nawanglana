import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import './index.css'
import Bridge from './components/Bridge.jsx'
import Akad from './components/Akad.jsx'
import Gallery from './components/Gallery.jsx'
import Gift from './components/Gift.jsx'
import Wish from './components/Wish.jsx'
import Music from './components/Music.jsx'
import Thanks from './components/Thanks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Music />
    <Header />
    <Bridge />
    <Akad />
    <Gift />
    <Gallery />
    <Wish />
    <Thanks />
  </React.StrictMode>,
)
