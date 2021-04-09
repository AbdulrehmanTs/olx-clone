import React, { Component } from 'react'
import './Footer.css'


export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="upper">
                    <ul>
                        <li>POPULAR CATEGORIES</li>
                        <li>Cars</li>
                        <li>Flats for rent</li>
                        <li>Jobs</li>
                        <li>Mobile Phones</li>
                    </ul>
                    <ul>
                        <li>TRENDING SEARCHES</li>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Dogs</li>
                        <li>Books</li>
                    </ul>
                    <ul>
                        <li>ABOUT US</li>
                        <li>ABout OLX Group</li>
                        <li>OLX Blog</li>
                        <li>Contact Us</li>
                        <li>OLX for Businesses</li>
                    </ul>
                    <ul>
                        <li>OLX</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                    </ul>
                    <ul>
                        <li>FOLLOW US</li>
                        <li className='socialIcons'><i className="fab fa-facebook"></i> <i className="fab fa-twitter-square"></i><i className="fab fa-youtube"></i> <i className="fab fa-instagram"></i></li>
                        <li><img src='../assets/images/google-play-logo.png' alt={""}/></li>
                        <li><img src='../assets/images/appstore.png' alt={""} /></li>
                    </ul> 
                </div>

                <div className="bottom">
                    <p className='left-text'>Other Countries India - South Africa - Indonesia </p> 
                    <p className='right-text'>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                </div>
            </div>
        )
    }
}
