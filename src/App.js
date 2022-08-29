import './App.css';
import NavbarReact from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

/* import Producto from './componentes/Cards/Cards'; */







function App() {
  return (
    
    <div className="App">
      <NavbarReact/>
      
      <header className="App-header">
        
        <Titulo persona= "Guitarras"/>
        

        <ItemListContainer/>
       
       
        
        
        {/* <div className='container col-1'>
        <Producto/>
        <Producto/>
        <Producto/>
        
        </div> */}
        
        
        
      </header>
    </div>
  );
}

export default App;
 
