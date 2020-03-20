import React from 'react'

import Header from './components/Header.js'
import Main from './components/Main.js'
import HomeServices from './components/HomeServices'
import Footer from './components/Footer.js'

import './App.sass'

const App = () => (
    <div className="App">
        <div className='container-fluid'>
            <Header />
            <Main />
            <HomeServices />
        </div>
        <Footer />
    </div>
)

export default App;
