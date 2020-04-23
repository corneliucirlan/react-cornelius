import React from 'react'

import { initGA, PageView } from './components/Tracking'
import SinglePage from './components/singlePage'

import './App.sass'

const App = () => {

    // Initialize ReacgGA
    initGA('UA-63714956-1')

    // Track pageview
    PageView()

    return (
        <div className="App">
            <SinglePage />
        </div>
    )
}

export default App
