import React from 'react';
import './App.css';
import AppRouter from './Config/Router';
import { connect } from 'react-redux'
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class App extends React.Component {


  render() {

    // const x = document.getElementsByClassName(".backToTopBtn")

    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > 100) {
    //     x.classList.add('scrolled');
    //   }
    //   else {
    //     x.classList.remove('scrolled');
    //   }
    // })

    const scroll = () => {
      window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }


    // console.log("redux===>", this.props)
    return (
      <div>
        <button className="backToTopBtn" onClick={() => scroll()}>
          <ArrowUpIcon fontSize="large" />
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
