
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Popular from './components/Popular'
import AnimeItem from './components/AnimeItem'
import Homepage from './components/Homepage'
import Gallery from './components/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/anime/:id' element={<AnimeItem />} />
        <Route path='/character/:id' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
