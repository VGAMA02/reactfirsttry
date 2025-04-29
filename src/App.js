import logo from './logo.svg';
import './App.css';


function HolaMundo(nombre,edad){
  var presentacion = <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad}</h3>
  </div>
 
  return presentacion;
}

function App() {
  var nombre = "Gama";
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido a la primera aplicacion en react
        </p>
        {
          HolaMundo(nombre,25)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
