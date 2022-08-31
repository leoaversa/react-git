import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useEffect ,useState} from 'react';

const guitars = [

    {id: 1, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0109200800_gtr_frt_001_rr.jpg",
     title:"Stevie Ray Vaughan Stratocaster",
     description: "eléctrica",
     precio: 320000
     
    },
    {id: 2, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113912718_fen_ins_frt_1_rr.jpg",
     title:"American Professional II HSS",
     description: "eléctrica",
     precio: 190000
    },
    {id: 3, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0972023200_gtr_frt_001_rr.jpg",
     title:"American Acoustasonic® Stratocaster",
     description: "eléctrica",
     precio: 185000
    },
    {id: 4, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10005/0140610772_fen_ins_frt_1_rr.jpg",
     title:"George Harrison Rocky Stratocaster®",
     description: "eléctrica",
     precio: 225000
    },
    {id: 5, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0147312387_fen_ins_frt_1_rr.jpg",
     title:"American Player Plus Stratocaster®",
     description: "eléctrica",
     precio: 145000
    },
    {id: 6, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0115010727_fen_ins_frt_1_rr.jpg",
     title:"American Cory Wong Stratocaster®",
     description: "eléctrica",
     precio: 185000
    },
    {id: 7, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970913299_gtr_frt_001_rr.jpg",
     title:"Redondo Classic Acustic®",
     description: "eléctrica",
     precio: 153000
    },
    {id: 8, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970320337_fen_ins_frt_1_rr.jpg",
     title:"American PS-220E Parlor®",
     description: "eléctrica",
     precio: 194000
    },
    {id: 9, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10005/0971113221_gtr_frt_001_rr.jpg",
     title:"American FA-125CE Dreadnought®",
     description: "acustica",
     precio: 122000
    },
    {id: 10, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0970722088_gtr_frt_001_rr.jpg",
     title:"Malibu Player®",
     description: "acustica",
     precio: 365000
    },
    {id: 11, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970310303_fen_ins_frt_1_rr.jpg",
     title:"PD-220E Dreadnought®",
     description: "acustica",
     precio: 155000
    },
    {id: 12, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0970713506_gtr_frt_001_rr.jpg",
     title:"American Black Acustic®",
     description: "acustica",
     precio: 285000
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
        {/* <h1>Guitarra {props.greeting}</h1> */}
        
        <ItemList data={data}/>
        <div>
        <ItemCount initial={1} stock= {5} onAdd = {onAdd} />
        </div>
        </>
    );
}

export default ItemListContainer;