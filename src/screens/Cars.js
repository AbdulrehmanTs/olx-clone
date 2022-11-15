import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import GoogleAd from '../Components/GoogleAd'
import '../StyleSheets/App.css'
import { FaBars } from 'react-icons/fa';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BsViewStacked } from 'react-icons/bs';
import ItemCard from '../Components/ItemCard'
import ItemCardRow from '../Components/ItemCardRow'
import ItemBigCard from '../Components/ItemBigCard'
import { showGrid, showRows } from '../Store/Actions'
import Image2 from '../assets/Images/simage9.jpeg'
import Image3 from '../assets/Images/simage8.jpeg'
import Image4 from '../assets/Images/simage10.jpeg'

class Cars extends React.Component {
    constructor(){
        super()
        // RowCard's states
        this.state= {
            gridCards : true,
            rowCards: false,
            bigCards: false,
            flex: true,
        }
    }
    handleRows(){
        this.setState({
            gridCards : false,
            rowCards: true,
            bigCards: false,
            flex: false,
        })
    }
    handleGrids(){
        this.setState({
            gridCards : true,
            rowCards: false,
            bigCards: false,
            flex: true,
        })
    }
    handleBigCards(){
        this.setState({
            gridCards : false,
            rowCards: false,
            bigCards: true,
            flex: false,
        })
    }
    
    render() {
        const items = [
            {
                id: 1,
                description: "Perfume",
                cost: 9000,
                type: 'new',
                date: "3 days ago",
                address: 'karachi',
                image: Image2,
            },
            {
                id: 2,
                description: "Perfume",
                cost: 8000,
                date: "3 days ago",
                type: 'featured',
                address: "mari pure",
                image: Image3
            },
            {
                id: 3,
                description: "Perfume",
                cost: 300,
                date: "3 days ago",
                type: 'old',
                address: "muree",
                image: Image4
            },
            {
                id: 4,
                description: "Perfume",
                cost: 300,
                date: "3 days ago",
                type: 'old',
                address: "muree",
                image: Image4
            },
            {
                id: 5,
                description: "Perfume",
                cost: 300,
                date: "3 days ago",
                type: 'old',
                address: "muree",
                image: Image4
            }
        ]
        return (
            <div>
                <Header/>
                <GoogleAd/>
                <div className="categori_container">
                        <p className="popular_searches"><span> Popular Searches: </span> iphone - infinix - oppo - samsung - vivo - motorola - huawei</p>
                    <ol className="breadcrumbs">
                        <li>Home</li>
                        <li>Vehicles</li>
                    </ol>
                    <div>
                        <h1>Cars</h1>
                    </div>
                    
                    <div className="categori-wrapper">
                        <div className="filter-wrapper">
                            <h4 className="filter-head">Filters</h4>
                            <hr/>
                            <div className="categories-box">
                            <h2>CATEGORIES</h2>
                            <ul>
                                <li>All Categories
                                   <ul>
                                       <li>
                                           Vehicles
                                           <ul>
                                        <li>Cars (7596)</li>
                                        <li>Cars On Installments(87589)</li>
                                        <li>Cars Accessories (8649)</li>
                                        <li>Spare Parts(887)</li>
                                        <li>Buses, Vans and Trucks (8688)</li>
                                        <li>Rikshaw &amp; Chingchi (7649)</li>
                                        <li>Other vehicles (7687)</li>
                                        <li>Boats(65)</li>
                                        <li>Tructers &amp; Trailers</li>
                                            </ul>
                                       </li>
                                   </ul>
                                </li>
                            </ul>
                            <hr/>
                            </div>

                            <div className="location-box">
                                <h2>LOCATIONS</h2>
                                <ul>
                                    <li>Pakistan
                                    <ul>
                                        <li>Punjab(875)</li>
                                        <li>Sindh (5789)</li>
                                        <li>Islamabad (858)</li>
                                        <li>KPK</li>
                                        <li>Balochistan</li>
                                        <li>View more</li>
                                    </ul>
                                    </li>
                                </ul>
                                <hr/>
                            </div>

                            <div className="year-box">
                                <h2>YEAR</h2>
                                <div>
                                    <input type="number" placeholder="min" name="min-year" />
                                    <input type="number" placeholder="max" name="max-year"/>
                                </div>
                                <hr/>
                            </div>
                            <div className="KMs-driven-box">
                                <h2>KM'S DRIVEN</h2>
                                <div>
                                    <input type="number" placeholder="min" name="min-year" />
                                    <input type="number" placeholder="max" name="max-year"/>
                                </div>
                                <hr/>
                            </div>
                            <div className="Price-box">
                                <h2>PRICE</h2>
                                <div>
                                    <input type="number" placeholder="min" name="min-year" />
                                    <input type="number" placeholder="max" name="max-year"/>
                                </div>
                                <hr/>
                            </div>

                            <div className="make-box">
                                <h2>MAKE</h2>
                                <ul>
                                    <li>Suzuki(857)</li>
                                    <li>Toyota(7657)</li>
                                    <li>Honda(758)</li>
                                    <li>Daihatsu(865)</li>
                                    <li>Nissan(859)</li>
                                    <li>View More</li>
                                </ul>
                                <hr/>
                            </div>
                            <div className="fuel-box">
                                <h2>FUEL</h2>
                                <ul>
                                    <li>
                                        <input name="petrol" type="checkbox" />
                                        <label htmlFor="petrol" >Petrol <span>(850)</span></label>
                                    </li>
                                    <li>
                                        <input name="CNG" type="checkbox" />
                                        <label htmlFor="cng" >CNG <span>(874)</span></label>
                                    </li>
                                    <li>
                                        <input name="hybrid" type="checkbox" />
                                        <label htmlFor="hybrid" >Hybrid <span>(883)</span></label>
                                    </li>
                                    <li>
                                        <input name="diesel" type="checkbox" />
                                        <label htmlFor="diesel" >Diesel <span>(876)</span></label>
                                    </li>
                                    <li>
                                        <input name="lpg" type="checkbox" />
                                        <label htmlFor="lpg" >LPG <span>(95)</span></label>
                                    </li>
                                </ul>
                                <hr/>
                            </div>
                            <div className="registeredin-box">
                                <h2>REGISTERED IN</h2>
                                <ul>
                                    <li>
                                        <input name="lahore" type="checkbox" />
                                        <label for="lahore" >Lahore <span>(850)</span></label>
                                    </li>
                                    <li>
                                        <input name="karachi" type="checkbox" />
                                        <label for="karachi" >Karachi <span>(874)</span></label>
                                    </li>
                                    <li>
                                        <input name="islamabad" type="checkbox" />
                                        <label for="islamabad" >Islamabad <span>(883)</span></label>
                                    </li>
                                    <li>
                                        <input name="unregistered" type="checkbox" />
                                        <label for="unregistered" >Unregistered <span>(876)</span></label>
                                    </li>
                                    <li>
                                        <input name="multan" type="checkbox" />
                                        <label for="multan" >Multan <span>(95)</span></label>
                                    </li>
                                </ul>
                                <hr/>
                            </div>
                            <div className="condition-box">
                                <h2>CONDITION</h2>
                                <ul>
                                    <li>
                                        <input name="used" type="checkbox" />
                                        <label for="used" >Used <span>(850)</span></label>
                                    </li>
                                    <li>
                                        <input name="new" type="checkbox" />
                                        <label for="new" >New <span>(874)</span></label>
                                    </li>
                                </ul>
                                <hr/>
                            </div>

                        </div>
                        <div className="content-wrapper">
                            <div className="content-head">
                                <div className="view-method">
                                    <p>989+ ads</p>
                                    <p>VIEW <FaBars onClick={()=> this.handleRows()} /> <HiOutlineViewGridAdd  onClick={()=> this.handleGrids()}/> <BsViewStacked  onClick={()=> this.handleBigCards()}/> </p>
                                </div>
                                <div className="sortby-style">
                                    <label for="sortby">SORT BY: </label>
                                    <select name="sortby">
                                        <option value="new-listed">New listed</option>
                                        <option value="most-relevant">Most relevant</option>
                                        <option value="Lowest-price">Lowest price</option>
                                        <option value="highest-price">highest price</option>
                                    </select>
                                </div>
                            </div>
                            <hr/>

                            <div className="content-body">
                                {items.map((data)=>{
                                    if (this.state.gridCards){
                                    return <ItemCard key={data.id} data={data} />
                                }
                                else if (this.state.rowCards){
                                    return <ItemCardRow key={data.id} data={data} />
                                }
                                else {
                                    return <ItemBigCard key={data.id} data={data} />
                                }
                                })}
                                
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data: state.data
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators({showGrid: showGrid, showRows: showRows}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProp)(Cars);