import logo from './logo.svg';
import './App.css';
import Buscar from './Componentes/Buscar';

function App() {
  const user = {   // aca se guarda la info de Silvia 
    nombre : "Silvia",
    edad: 31,
    color : "Rojo"

  };

  const buscar = (nombre,edad )=> {  
    console.log (`Se busca dar con el paradero de ${nombre}, tiene ${edad} años.Gracias`);
  }; //utilizando template string para que sea mas legible

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Buscar userInfo= {user} Buscar={buscar} /> 
      </header>
    </div>
  );
}
    

export default App;
