import React, { Component } from 'react'
import './FreshRecomm.css'
import ItemCard from './ItemCard'
import PhoneApp from '../assets/Images/phone-app.webp'
import GooglePlayLogo from '../assets/Images/google-play-logo.png'
import AppStoreLogo from '../assets/Images/appstore.png'
import { connect } from 'react-redux'
import Image1 from "../assets/Images/simage9.jpeg"
import Image2 from "../assets/Images/simage10.jpeg"
import Image3 from "../assets/Images/simage12.jpeg"
import Image4 from "../assets/Images/simage13.jpeg"
import GoogleAd from './GoogleAd'

import {set_data} from '../Store/Actions'

class FreshRecomm extends Component {
    render() {
        console.log("redux props", this.props)
        const items = [
            {
                description: "Hello world",
                cost: 9000,
                date: "3 days ago",
            },
        ]

        return (
            <div>
                <br />
                <h1>Fresh Recommendations</h1>
                <div className='fresh-items'>
                    {items.map((item, index)=> {
                        return <ItemCard key={index} description={items.description}  />
                    })}
                    <ItemCard
                        cost="9000"
                        type="New"
                        image={Image1}
                        description="packets of HD Cameras"
                        date="3 days ago"
                    />
                    <ItemCard
                        cost='400'
                        image={Image2}
                        description="Audionic Sound Systems"
                        type="featured"
                        date="3 days ago"
                    />
                    <ItemCard
                        cost='500'
                        image={Image3}
                        description="Oppo F5 used 2 month only with charger and handsfree"
                        date="3 weeks ago"
                        type="featured"
                    />
                    <ItemCard
                        cost='500'
                        image={Image4}
                        description="Oppo f3 One hand used contact fast"
                        date="Today"
                        type="New"
                    />
                </div>

                <div className='btn-div'>
                    <button onClick={() => this.props.set_data("clicked load more button")} className='load-btn'>Load more</button>
                </div>
                <button onClick={this.props.set_data("Hello from set data button")}>set Data</button>

                <GoogleAd />

                <div className="phone-app">
                    <div className='d1'>
                        <img src={PhoneApp} alt={""} />
                    </div>

                    <div className='d2'>
                        <h1>Try The Olx App</h1>
                        <h3>Buy, Sell and Find just about anything <br /> using the app on your mobile.</h3>
                        <hr />
                    </div>

                    <div className='d3'>
                        <p>Get your app today</p>

                        <img src={GooglePlayLogo} alt={""} />
                        <img src={AppStoreLogo} alt={""} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    boo: "foo",
    userName: state.auth.userName,
    id: state.auth.id
})
const mapDispatchToProp = (dispatch) => ({
     set_data: ()=> dispatch(set_data)
})

export default connect(mapStateToProps, mapDispatchToProp)(FreshRecomm)