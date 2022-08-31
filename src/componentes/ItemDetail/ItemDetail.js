import './ItemDetail.css'

export const ItemDetail = ({data}) => {
    return(
    <div className='tele-container'>
    <div className='tele-detail'>
        <img className='tele-image' src={data.image} alt="guitarra"/>
        <div className='content'>
            <h1>{data.title}</h1>
    </div>
        <div className='price-guitar'>
            <h3>{data.description}</h3>
            <h3>{data.price}</h3>
            

    </div>
    </div>
    </div>
)};

export default ItemDetail;