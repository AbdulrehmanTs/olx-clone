import React from 'react'
import '../StyleSheets/App.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default class ItemCard extends React.Component {
    
    render() {
        const { description, cost, date, image, type, address } = this.props.data;
        return (
            <div className="card-container">
                <div className="image-container">
                    <p className="carditem-type">{type}</p>
                    <img src={image} alt="Item"/>
                    <FavoriteBorderIcon className="heart-icon" />
                </div>

                <div className="card-info">
                    <div className="card-price-details">
                        <h1 className="card-cost">Rs.{cost}</h1>
                        <p className="card-description">{description}</p>
                    </div>
                    <div className="card-address">
                        <p className="seller-address">{address}</p>
                        <p className="card-date">{date}</p>
                    </div>
                </div>
            </div>
        )
    }
}
