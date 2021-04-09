import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

class TvVideoAudio extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>This is TvVideoAudio Page</h1>
                <p>Go to Home</p>
                <Link to='/'>Home</Link>
                <Footer/>
            </div>
        )
    }
}

export default TvVideoAudio;