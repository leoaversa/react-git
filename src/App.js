import './App.css';
import Alert from './componentes/Alert/Alert';
import ButtonBoostrap from './componentes/Button/Button';
import NavbarReact from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import Items from './componentes/ItemListContainer/ItemListContainer';
import Producto from './componentes/Cards/Cards';







function App() {
  return (
    
    <div className="App">
      <NavbarReact/>
      
      <header className="App-header">
        
        <Titulo persona= "Guitarras"/>
        

        <Items greeting= "Gibson"/>
        <Items greeting= "Washburn"/>
        <Items greeting= "Ibanez"/>
        <Items greeting= "Yamaha"/>
        <Items greeting= "Jackson"/>
       
        
        <Alert/>
        <div className='container col-1'>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        </div>
        
        <ButtonBoostrap>Primary</ButtonBoostrap>
        
        
      </header>
    </div>
  );
}

export default App;
 
