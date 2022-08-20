import logo from './logo.svg';
import './App.css';
import Alert from './componentes/Alert/Alert';
import ButtonBoostrap from './componentes/Button/Button';
import NavbarReact from './componentes/Navbar/Navbar';
import H1 from './componentes/H1/H1';
import Items from './componentes/ItemListContainer';







function App() {
  return (
    
    <div className="App">
      <NavbarReact/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Curso de React en Coderhouse</p>

        <Items marca= "Gibson"/>
        <Items marca= "Washburn"/>


        <H1 persona= "Leo"/>
        <H1 persona= "Fender"/>
        
        
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
 
