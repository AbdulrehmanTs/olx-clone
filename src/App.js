import React from "react";
import "./StyleSheets/App.css";
import AppRouter from "./Config/Router";
import { connect } from "react-redux";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "none",
    };
  }
  render() {
    const scroll = () => {
      window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    window.onscroll = () => {
      if (window.scrollY >= 300) {
        this.setState({ display: "block" });
      } else {
        this.setState({ display: "none" });
      }
    };

    return (
      <div className="app_container">
        <div style={{ display: this.state.display }}>
          <a className="backToTopBtn" onClick={() => scroll()}>
            <ArrowUpIcon style={{ marginLeft: "10px" }} fontSize="large" /> Back
            to Top
          </a>
        </div>

        <AppRouter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.userName,
});

const mapDispatchToProp = (dispatch) => ({
  set_data: () => console.log("Dispatch function"),
});
export default connect(mapStateToProps, mapDispatchToProp)(App);
