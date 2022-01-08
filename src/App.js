
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* <h2> App Component </h2> */}
    </div>
  );
}

export default App;
