

import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import GameDetails from './components/GameDetails'
import Search from './pages/Search'
import './App.css'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/game/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
  )
}

export default App
