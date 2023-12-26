import './App.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import ChooseProfile from './components/ChooseProfile/ChooseProfile'
import HomeProfile from './components/AllHome/HomeProfile/HomeProfile'

const Home = () => {
  return (
    <>
      <ChooseProfile/>
    </>
  )
}

function App() {      

  return (
    
      <div>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path=':name' element={<HomeProfile   />}> </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
    
  )
}

export default App
