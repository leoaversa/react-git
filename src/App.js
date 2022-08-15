import logo from './logo.svg';
import './App.css';
import Alert from './componentes/Alert/Alert';
import ButtonBoostrap from './componentes/Button/Button';
import NavbarReact from './componentes/Navbar/Navbar';






function App() {
  return (
    
    <div className="App">
      <NavbarReact/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Curso de React en Coderhouse</p>
        
        <Alert/>
        <ButtonBoostrap>Primary</ButtonBoostrap>
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
 
