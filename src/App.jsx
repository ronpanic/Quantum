import './App.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import ChooseProfile from './components/ChooseProfile/ChooseProfile'
import HomeProfile from './components/AllHome/HomeProfile/HomeProfile'
import MovieDetail from './components/AllHome/MovieDetail/MovieDetail'
import LoginProfile from './components/LoginProfile/LoginProfile'

const Home = () => {
  return (
    <>
      <LoginProfile />
    </>
  )
}

function App() {

  const getMovieById = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=402d9bf8861a09c017a7ee5461262640&language=es-ES`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path=':name'
            element={<HomeProfile />}
          />
          <Route
            path="/movie/:id"
            element={<MovieDetail getMovieById={getMovieById} />} 
          />
          <Route path="/ChooseProfile" element={<ChooseProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
