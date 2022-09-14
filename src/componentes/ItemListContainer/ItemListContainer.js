import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useEffect ,useState} from 'react';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';





const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');

        if (categoryId){
        const queryFilter = query(queryCollection, where('category','==', categoryId))
        getDocs(queryFilter)
        .then(res=> setData(res.docs.map(item => ({id: item.id, ...item.data() }))))
        } 
        
        else{ 
        
        getDocs(queryCollection)
        .then(res=> setData(res.docs.map(item => ({id: item.id, ...item.data() }))))
                    

    }

    },[categoryId])

    
    
    return(
        <>
        
        <ItemList data={data} ClassName="ItemList"/>
        
        </>
    );
}

export default ItemListContainer;