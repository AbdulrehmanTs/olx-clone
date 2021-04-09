import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import UserInfo from './UserInfo'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user : false
        }
    }

    menu_toggles = () => {
        const x = document.querySelector('.menu_expend')
        x.classList.toggle('menu_toggle')
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header'>
                    <Link className='logo' to={"/"}><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></Link>
                    
                    <div className='search-location'>
                        <SearchIcon className='search-location-icon' />
                        <input type='text' placeholder="Pakistan"/>
                    </div>


                    <div className='search-bar'>
                        <input type='text' placeholder='Find Cars, Mobile Phones and more...' />
                        <SearchIcon fontSize='large' className='search-bar-icon' />
                    </div>


                    { this.state.user ? <UserInfo/> :
                    <div className="login-btn-container">
                        <button onClick={()=> this.setState({user: true})} className='loginBtn'>Login</button>
                    </div>}
                    


                    <div className="sell-btn-container" >
                        <button className='sellBtn'><i className="fas fa-plus"></i>sell</button>
                    </div>
                </div>

                <div className='menu'>
                    <ul>
                        <li  className='nav-link' onClick={this.menu_toggles}>ALL CATEGORIES<i className="fas fa-chevron-down"></i></li>
                        <div className="menu_expend">
                            <div>
                                <ul>
                                    <li>Vehicles</li>
                                    <li>Tractors & Trailers</li>
                                    <li>Boats</li>
                                    <li>Other Vehicles</li>
                                    <li>Rickshaw & Chingchi</li>
                                    <li>Buses, Vans & Trucks</li>
                                    <li>Spare Parts</li>
                                    <li>Cars Accessories</li>
                                    <li>Cars on Installments</li>
                                    <li>Cars</li>
                                </ul>
                                <ul>
                                    <li>Mobiles</li>
                                    <li>Mobile Phones</li>
                                    <li>Accessories</li>
                                    <li>Tablets</li>
                                </ul>
                                <ul>
                                    <li>Electronics & Home Appliances</li>
                                    <li>Washing Machines & Dryers</li>
                                    <li>Fridges & Freezers</li>
                                    <li>AC & Coolers</li>
                                    <li>Kitchen Appliances</li>
                                    <li>Generators, UPS & Power Solutions</li>
                                    <li>Other Home Appliances</li>
                                    <li>Games & Entertainment</li>
                                    <li>TV - Video - Audio</li>
                                    <li>Cameras & Accessories</li>
                                    <li>Computers & Accessories</li>
                                </ul>
                                <ul>
                                    <li>Property for Sale</li>
                                    <li>Portions & Floors</li>
                                    <li>Shops - Offices - Commercial Space</li>
                                    <li>Apartments & Flats</li>
                                    <li>Houses</li>
                                    <li>Land & Plots</li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>Animals</li>
                                    <li>Other Animals</li>
                                    <li>Pet Food And Accessories</li>
                                    <li>Horses</li>
                                    <li>Livestock</li>
                                    <li>Dogs</li>
                                    <li>Cats</li>
                                    <li>Hens And Aseel</li>
                                    <li>Birds</li>
                                    <li>Fish And Aquariums</li>
                                </ul>
                                <ul>
                                    <li>Furniture And Home Decor</li>
                                    <li>Other Household Items</li>
                                    <li>Office Furniture</li>
                                    <li>Curtains & Blinds</li>
                                    <li>Rugs & Carpets</li>
                                    <li>Painting & Mirrors</li>
                                    <li>Garden & Outdoor</li>
                                    <li>Tables & Dining</li>
                                    <li>Home Decoration</li>
                                    <li>Beds & Wardrobes</li>
                                    <li>Sofa & Chairs</li>
                                </ul>
                                <ul>
                                    <li>Business, Industrial & Agriculture</li>
                                    <li>Medical & Pharma</li>
                                    <li>Other Business & Industry</li>
                                    <li>Agriculture</li>
                                    <li>Construction & Heavy Machinery</li>
                                    <li>Trade & Industrial</li>
                                    <li>Food & Restaurants</li>
                                    <li>Business for Sale</li>
                                </ul>
                                <ul>
                                    <li>Bikes</li>
                                    <li>Scooters</li>
                                    <li>ATV & Quads</li>
                                    <li>Bicycles</li>
                                    <li>Spare Parts</li>
                                    <li>Motorcycle</li>
                                </ul>
                            </div>


                            <div>
                                <ul>
                                    <li>Fassion And Beauty</li>
                                    <li>Other Fasion</li>
                                    <li>Couture</li>
                                    <li>Lawn & Pret</li>
                                    <li>Wedding</li>
                                    <li>Watches</li>
                                    <li>Skin & Hair</li>
                                    <li>Make Up</li>
                                    <li>Jewellery</li>
                                    <li>Footwear</li>
                                    <li>Clothes</li>
                                    <li>Accessories</li>
                                </ul>
                                <ul>
                                    <li>Property For Rent</li>
                                    <li>Land And Plots</li>
                                    <li>Vacation Rentals - Guest Houses</li>
                                    <li>Roommates & Paying Guests</li>
                                    <li>Rooms</li>
                                    <li>Shops - Offices - Commercial Space</li>
                                    <li>Portions & Floors</li>
                                    <li>Apartments & Flats</li>
                                    <li>Houses</li>
                                </ul>
                                <ul>
                                    <li>Jobs</li>
                                    <li>Other Jobs</li>
                                    <li>Part - Time</li>
                                    <li>Domestic Staff</li>
                                    <li>Medical</li>
                                    <li>Manufacturing</li>
                                    <li>Accounting And Finance</li>
                                    <li>Human Resourses</li>
                                    <li>Clerical Administration</li>
                                    <li>Hotels And Tourism</li>
                                    <li>IT & Networking</li>
                                    <li>Sales</li>
                                    <li>Customer Service</li>
                                    <li>Education</li>
                                    <li>Advertising And PR</li>
                                    <li>Marketing</li>
                                    <li>Online</li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>Services</li>
                                    <li>Farm And Fresh Food</li>
                                    <li>Catering And Resturant</li>
                                    <li>Home And Office Repaire</li>
                                    <li>Movers And Packers</li>
                                    <li>Maids And Domestic Help</li>
                                    <li>Health And Beautiy</li>
                                    <li>Event Services</li>
                                    <li>Electronics And Computer Repairs</li>
                                    <li>Other Services</li>
                                    <li>Web Development</li>
                                    <li>Drivers And Taxi</li>
                                    <li>Car Rental</li>
                                    <li>Travel & Visa</li>
                                    <li>Education And Classes</li>
                                </ul>
                                <ul>
                                    <li>Books, Sports & Hobbies</li>
                                    <li>Other Hobbies</li>
                                    <li>Gym & Fitness</li>
                                    <li>Sports Equepments</li>
                                    <li>Musical Instrumens</li>
                                    <li>Books & Magzines</li>
                                </ul>
                                <ul>
                                    <li>Kids</li>
                                    <li>Kids Accessories</li>
                                    <li>Kinds Bikes</li>
                                    <li>Swings And Slides</li>
                                    <li>Prams And Walkers</li>
                                    <li>Toys</li>
                                    <li>Kids Furniture</li>
                                </ul>
                            </div>

                        </div>
                        
                        <Link className='nav-link' to='/mobilephones'>Mobile Phones</Link>
                        <Link className='nav-link' to='/cars'>Cars</Link>
                        <Link className='nav-link' to='/motorcycles'>Motercycles</Link>
                        <Link className='nav-link' to='/houses'>Houses</Link>
                        <Link className='nav-link' to='/tvvideoaudio'>TV-Video-Audio</Link>
                        <Link className='nav-link' to='/tablets'>Tablets</Link>
                        <Link className='nav-link' to='/landsandplots'>Land and Plots</Link>
                    </ul>
                </div>
            </div>
        )
    }
}