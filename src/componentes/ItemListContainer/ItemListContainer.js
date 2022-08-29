import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useEffect ,useState} from 'react';

const guitars = [

    {id: 1, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0109200800_gtr_frt_001_rr.jpg",
     title:"Stevie Ray Vaughan Stratocaster",
     precio: 320000
     
    },
    {id: 2, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113912718_fen_ins_frt_1_rr.jpg",
     title:"American Professional II HSS",
     precio: 190000
    },
    {id: 3, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0972023200_gtr_frt_001_rr.jpg",
     title:"American Acoustasonic® Stratocaster",
     precio: 185000
    },
    {id: 4, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10005/0140610772_fen_ins_frt_1_rr.jpg",
     title:"George Harrison Rocky Stratocaster®",
     precio: 225000
    },
    {id: 5, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0147312387_fen_ins_frt_1_rr.jpg",
     title:"Player Plus Stratocaster®",
     precio: 145000
    },
    {id: 6, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0115010727_fen_ins_frt_1_rr.jpg",
     title:"Cory Wong Stratocaster®",
     precio: 185000
    },
    
    
];


const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(guitars);
            }, 2000);
        });
        getData.then(res=> setData(res));

    },[])

    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`);
    }
    
    return(
        <>
        <h1>Guitarra {props.greeting}</h1>
        <ItemCount initial={1} stock= {5} onAdd = {onAdd} />
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;