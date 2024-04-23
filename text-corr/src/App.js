import Aside from './componentes/aside';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './paginas/home';

function App() {
  return (
    <div className='displayFlexMain'>
<Aside/>
<main className='displayFlexMain'>
  <Routes>
  <Route path="/" element ={<HomePage />} />
  <Route path="/sobre" element ={<HomePage />} />
  <Route path="/servicos" element ={<HomePage />} />
  <Route path="/contato" element ={<HomePage />} />
  </Routes>
</main>
    </div>
  );
}

export default App;
