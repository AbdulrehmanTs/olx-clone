import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Banner.css'
import GoogleAd from './GoogleAd'


export default class Banner extends Component {

    // expendBtn = document.addEventListener("click", () => {
    //     const icon = document.querySelector(".fa-chevron-down")
    //     icon.replaceWith(<i class="fas fa-chevron-up"></i>)
    //     console.log()
    // })



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
