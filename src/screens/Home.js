import React from 'react';
import "../StyleSheets/App.css"
import Header from '../Components/Header';
import Banner from '../Components/Banner'
import FreshRecomm from '../Components/FreshRecomm'
import Footer from '../Components/Footer'

class Home extends React.Component {
  

  render (){
    return(
    <div>
      <Header />
      <Banner />
      <FreshRecomm/>
      <Footer />
    </div>

    )
    }
  }
export default Home;