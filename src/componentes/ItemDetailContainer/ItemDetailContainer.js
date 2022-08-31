import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect ,useState} from 'react';

const telecaster = {
    id: 1,
    image: "https://wallpapercave.com/wp/wp3006746.jpg",  
    title: "Stratocaster",
    description: "Guitarra Vintage en Oferta",
    price: "$59.000"};


export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() =>{
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve (telecaster);
                
            }, 2000);
        });
        getItem.then(res => setData(res));
    }, [])


    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;