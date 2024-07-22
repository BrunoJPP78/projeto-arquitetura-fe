import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Personagens from './pages/Personagens/Personagens';
import Episodios from './pages/Episodios/Episodios';
import Localizacao from './pages/Localizacao/Localizacao';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Rick and Morty" subtitle="Bruno Lima" />
      <nav className="nav">
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/localizacao" element={<Localizacao />} />
      </Routes>
    </div>
  );
}

export default App;
