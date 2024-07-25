import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Personagens from './pages/Personagens/Personagens';
import Episodios from './pages/Episodios/Episodios';
import Localizacao from './pages/Localizacao/Localizacao';
import Home from './pages/Home';
import RickAndMortyLogo from './assets/images/Rick_and_Morty_logo.webp';
import PersonagemDetalhes from './components/PersonagemDetalhes/PersonagemDetalhes';
import LocalizacaoDetalhes from './components/LocalizacaoDetalhes/LocalizacaoDetalhes';
import EpisodiosDetalhes from './components/EpisodiosDetalhes/EpisodiosDetalhes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header imageSrc={RickAndMortyLogo} />
      <nav className="nav">
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/personagens/:id" element={<PersonagemDetalhes />} />
        <Route path="/localizacao/:id" element={<LocalizacaoDetalhes />} />
        <Route path="/episodios/:id" element={<EpisodiosDetalhes />} />
      </Routes>
    </div>
  );
}

export default App;
