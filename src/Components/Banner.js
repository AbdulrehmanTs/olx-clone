import React, { Component } from 'react'
import './Banner.css'
import GoogleAd from './GoogleAd'


export default class Banner extends Component {

    render() {
        return (
            <>
                <div className='banner-images'>
                </div>
            <GoogleAd/>
            </>
        )
    }
}
