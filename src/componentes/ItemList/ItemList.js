import Item from "../Item/Item";



const ItemList = ({data = []}) => {
    return(
        
        data.map(guitar => <Item key={guitar.id} info={guitar}/>)
        
    );
}

export default ItemList;