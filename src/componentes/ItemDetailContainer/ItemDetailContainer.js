import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';

const guitarras = [

    {id: 1, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0109200800_gtr_frt_001_rr.jpg",
     title:"Stevie Ray Vaughan Stratocaster",
     category: "eléctrica",
     precio: 320000
     
    },
    {id: 2, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113912718_fen_ins_frt_1_rr.jpg",
     title:"American Professional II HSS",
     category: "eléctrica",
     precio: 190000
    },
    {id: 3, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0972023200_gtr_frt_001_rr.jpg",
     title:"American Acoustasonic® Stratocaster",
     category: "eléctrica",
     precio: 185000
    },
    {id: 4, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10005/0140610772_fen_ins_frt_1_rr.jpg",
     title:"George Harrison Rocky Stratocaster®",
     category: "eléctrica",
     precio: 225000
    },
    {id: 5, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0147312387_fen_ins_frt_1_rr.jpg",
     title:"American Player Plus Stratocaster®",
     category: "eléctrica",
     precio: 145000
    },
    {id: 6, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0115010727_fen_ins_frt_1_rr.jpg",
     title:"American Cory Wong Stratocaster®",
     category: "eléctrica",
     precio: 185000
    },
    {id: 7, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970913299_gtr_frt_001_rr.jpg",
     title:"Redondo Classic Acustic®",
     category: "acustica",
     precio: 153000
    },
    {id: 8, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970320337_fen_ins_frt_1_rr.jpg",
     title:"American PS-220E Parlor®",
     category: "acustica",
     precio: 194000
    },
    {id: 9, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10005/0971113221_gtr_frt_001_rr.jpg",
     title:"American FA-125CE Dreadnought®",
     category: "acustica",
     precio: 122000
    },
    {id: 10, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0970722088_gtr_frt_001_rr.jpg",
     title:"Malibu Player®",
     category: "acustica",
     precio: 365000
    },
    {id: 11, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970310303_fen_ins_frt_1_rr.jpg",
     title:"PD-220E Dreadnought®",
     category: "acustica",
     precio: 155000
    },
    {id: 12, 
     image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0970713506_gtr_frt_001_rr.jpg",
     title:"American Black Acustic®",
     category: "acustica",
     precio: 285000
    },
    
    
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {detalleId} = useParams();
    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (guitarras);
                
            }, 1000);
        });
        getData.then(res => setData(res.find(guitars=> guitars.id === parseInt(detalleId))));
    }, [])


    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;