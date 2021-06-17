import React from 'react';
import './StyleSheets/App.css';
import AppRouter from './Config/Router';
import { connect } from 'react-redux'
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      display : "none"
    }
  }
  render() {
    const scroll = () => {
      window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    window.onscroll = () =>{
      if (window.scrollY > 300 ){
      this.setState({opacity: 100})
      } else {
      this.setState({opacity: 0})
      }
    }

    console.log("redux===>", this.props)
    console.log("sreen width: ", window.screen.availWidth)
    return (
      <div className="app_container">
        <button style={{opacity: this.state.opacity}} className="backToTopBtn" onClick={() => scroll()}>
         <ArrowUpIcon style={{marginRight: "4px"}} fontSize="large" /> 
          <p>Back to top</p>
        </button>

        <AppRouter />
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.userName
})

const mapDispatchToProp = (dispatch) => ({
  set_data: () => console.log("Dispatch function"),
})
export default connect(mapStateToProps, mapDispatchToProp)(App);
