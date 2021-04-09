import React, { Component } from 'react'
import './LastSearch.css'
import ItemCard from './ItemCard'
import image1 from '../assets/Images/simage2.jpeg'
import image2 from '../assets/Images/simage3.jpeg'
import image3 from '../assets/Images/simage4.jpeg'
import image4 from '../assets/Images/simage8.jpeg'

export default class LastSearch extends Component {
    render() {
        return (
            <div className='lastSearch'>
                <h2>Based on your last Search</h2>
                <p>View more</p>
                <div className='cards'>
                    <ItemCard 
                    image={image1}
                    type="Featured"
                    cost='200' 
                    date='4 hrs ago' 
                    description='12 marla house gulshan' 
                    onClick={()=>{alert("Heloo")}}
                    />
                    <ItemCard 
                    image={image2} 
                    type="Featured"
                    cost='500' 
                    date='6 hrs ago' 
                    description='amaze fitness venchour' 
                    />
                    <ItemCard 
                    type="Featured"
                    image={image3}
                    cost='1000' 
                    date='1 day ago'
                    />
                    <ItemCard 
                    image={image4}
                    type="Featured"
                    cost='180' 
                    date='2 days ago'
                    />

                </div>
            </div>
        )
    }
}
