import './App.css';
import NavbarReact from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

/* import Producto from './componentes/Cards/Cards'; */







function App() {
  return (
    
    <div className="App">
      <NavbarReact/>
      <ItemDetailContainer/>     
     
      
      <header className="App-header">
        
        <Titulo persona= "Guitarras"/>       

        <ItemListContainer/>    
        
        
        
               
        
        
      </header>
    </div>
  );
}

export default App;
 
