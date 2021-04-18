import React, { Component } from 'react'
import './Banner.css'
import GoogleAd from './GoogleAd'


export default class Banner extends Component {

    render() {
        return (
            <>
            <div className='Banner-container'>
                <div className='banner-images'>
                </div>
            </div>
            <GoogleAd/>
            </>
        )
    }
}
