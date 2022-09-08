import Item from "../Item/Item";
import './ItemList.css'


const ItemList = ({data = []}) => {
    return(         
          
        
        
        data.map(guitar => <Item key={guitar.id} info={guitar}/>)      
       
    );
};
 

export default ItemList;


