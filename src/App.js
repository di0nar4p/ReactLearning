import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  
  const nome = 'NavBar'
  return (
   <div className='App'>


      <Frase nome={nome}/>
     
      {/* Componente Pessoa*/}
      <Pessoa nome='Glauco'
       idade='29'
       profissao='Programador'
       foto='https://via.placeholder.com/150'/>

       {/* Componente Lista com ul e li */}
      <List/>
   </div>

  )
}

export default App;
