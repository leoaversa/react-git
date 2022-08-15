import logo from './logo.svg';
import './App.css';
import Alert from './componentes/Alert/Alert';
import TypesExample from './componentes/Button/Button';
import BasicExample from './componentes/Navbar/Navbar';






function App() {
  return (
    
    <div className="App">
      <BasicExample/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Curso de React en Coderhouse</p>
        
        <Alert/>
        <TypesExample>Primary</TypesExample>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
 
