import './App.scss';
import Home from "./components/Home";
import Detalle from "./components/Detalle";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {


  return (
    <>   
    <BrowserRouter>
    <nav>
      <h1>RICK AND MORTY</h1>
      <Link to="/">Home</Link>    
    </nav>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vista-de-detalle/:id" element={<Detalle />}/>
    </Routes>

    <footer>
      <h2>Made by Carola</h2>
    </footer>
    </BrowserRouter>
          
    </>
  )
}

export default App;
