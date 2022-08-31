import './App.css';
import NavbarReact from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    
    <div className="App">
      <NavbarReact/>

      <ItemDetailContainer/>  

     <Titulo persona= "Guitarras"/>   
      
      <header className="App-header">        
            

        <ItemListContainer/>       
        
                
      </header>
    </div>
  );
}

export default App;
 
