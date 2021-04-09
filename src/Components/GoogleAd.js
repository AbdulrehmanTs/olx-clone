import React from 'react'
import './GoogleAd.css'
import googleAd from '../assets/Images/googleAd.png'


class GoogleAd extends React.Component{
    render(){
        return(
            <div className="ad-container"> 
                <img className="ad-image" src={googleAd} alt="googleAd" />
            </div>
        )
    }
}

export default GoogleAd;