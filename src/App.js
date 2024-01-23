import Topo from './componentes/Topo/App.js';
import Conteudo from './componentes/Conteudo/index.js';
import Rodape from './componentes/Rodape/App.js';

import './App.css';
function App() {
  return (
    <div className='container'>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;