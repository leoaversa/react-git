import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect ,useState} from 'react';

const telecaster = {
    id: 1,
    image: "",  
    title: "Telecaster"};


export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (telecaster);
                
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])


    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;