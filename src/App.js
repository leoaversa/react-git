import './App.css';
import NavbarReact from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart/Cart';
import CarouselGuitar from './componentes/Carousel/Carousel';
import CartProvider from './CartContext/CartContext';
import Footer from './componentes/Footer/Footer';





function App() {
  return ( 
    
    <BrowserRouter>
      <div className="App">
        
        <CartProvider>
        <NavbarReact/>
        <CarouselGuitar/>
        <Titulo persona="Guitars"/>
        

        <header className="App-header">
          

        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
          
        </Routes>
        

        </header>
        <Footer/>
        
        </CartProvider>
        
          
      </div>
           
    </BrowserRouter>
  );
}

export default App;
 
