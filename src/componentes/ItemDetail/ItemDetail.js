import './ItemDetail.css'

export const ItemDetail = ({data}) => {
    return(
    <div className='tele-container'>
    <div className='tele-detail'>
        <img className='tele-image' src={data.image} alt=""/>
        <div className='content'>
            <h1>{data.title}</h1>
    </div>
    </div>
    </div>
)};

export default ItemDetail;