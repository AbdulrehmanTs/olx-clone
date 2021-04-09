import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer'


class MobilePhones extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>This is MobilePhones Page</h1>
                <p>Lorem ipsum doller sit</p>
                <Link to='/'>Home</Link>
                <Footer/>
            </div>
        )
    }
}

export default MobilePhones;