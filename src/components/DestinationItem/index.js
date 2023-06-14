import './index.css' 

const DestinationItem = props => {
    const {destinationDetails,key} = props 
    const {name, imgUrl} = destinationDetails 

    return(
        <div className="destination-item-container">
            <img src={imgUrl} alt={name} className="destination-image"/>
            <p className="destination-name">{name}</p>
        </div>
    )
} 

export default DestinationItem