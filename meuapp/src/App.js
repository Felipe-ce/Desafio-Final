// import logo from './logo.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Sobre from './pages/Sobre';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />

        {/* Caso seja inserido uma URL que não existe sera redirecionado a pagina de erro */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
