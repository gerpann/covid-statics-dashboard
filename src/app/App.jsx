import React from 'react'
import Map from '../app/components/map/Map'
import DashBoard from './components/left/DashBoard'
import Right from './components/right/Right'
import './App.css'

const App = () => {
    return (
        <div class='app'>
            <DashBoard />
            <Map />
            <Right />
        </div>
    )
}

export default App