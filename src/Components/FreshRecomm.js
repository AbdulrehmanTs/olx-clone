import React, { Component } from "react";
import "./FreshRecomm.css";
import ItemCard from "./ItemCard";
import PhoneApp from "../assets/Images/phone-app.webp";
import GooglePlayLogo from "../assets/Images/google-play-logo.png";
import AppStoreLogo from "../assets/Images/appstore.png";
import { connect } from "react-redux";
import Image1 from "../assets/Images/simage9.jpeg";
import Image2 from "../assets/Images/simage10.jpeg";
import Image3 from "../assets/Images/simage12.jpeg";
import Image4 from "../assets/Images/simage13.jpeg";
import GoogleAd from "./GoogleAd";
import { setData } from "../Store/Actions/index";

class FreshRecomm extends Component {
  render(props) {
    console.log("redux props>>>", props);
    // const dispatch = props.dispatch;
    const items = [
      {
        id: 1,
        description: "Perfume",
        cost: 9000,
        date: "3 days ago",
        image: Image2,
        type: "new",
      },
      {
        id: 2,
        description: "spray",
        cost: 8000,
        date: "3 days ago",
        image: Image3,
        type: "old",
      },
      {
        id: 3,
        description: "mouse",
        cost: 300,
        date: "3 days ago",
        image: Image4,
        type: "new",
      },
    ];

    for (var i = 0; i < items.length; i++) {
      var id = items[i].id;
    }

    return (
      <div className="container-fluid">
        <br />
        <h1>Fresh Recommendations</h1>
        <div className="fresh-items">
          {items.map((data) => {
            return <ItemCard key={data.id} data={data} />;
          })}

          {/* <ItemCard
                        cost="9000"
                        type="New"
                        image={Image1}
                        description="packets of HD Cameras"
                        date="3 days ago"
                    />
                    <ItemCard
                        cost='400'
                        image={Image2}
                        description="Audionic Sound Systems"
                        type="featured"
                        date="3 days ago"
                    />
                    <ItemCard
                        cost='500'
                        image={Image3}
                        description="Oppo F5 used 2 month only with charger and handsfree"
                        date="3 weeks ago"
                        type="featured"
                    />
                    <ItemCard
                        cost='500'
                        image={Image4}
                        description="Oppo f3 One hand used contact fast"
                        date="Today"
                        type="New"
                    /> */}
        </div>

        <div className="btn-div">
          <button onClick={setData(items[2])} className="load-btn">
            Load more
          </button>
        </div>

        <GoogleAd />

        <div className="phone-app">
          <div className="d1">
            <img src={PhoneApp} alt={""} />
          </div>

          <div className="d2">
            <h1>Try The Olx App</h1>
            <h3>
              Buy, Sell and Find just about anything <br /> using the app on
              your mobile.
            </h3>
            <hr />
          </div>

          <div className="d3">
            <p>Get your app today</p>

            <img src={GooglePlayLogo} alt={""} />
            <img src={AppStoreLogo} alt={""} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // user: state.auth.id1.user,
  // id: state.auth.id1,
  // email: state.auth.id1.email,
  // name: state.root.user1.name,
  // appName: state.app.appName
});
const mapDispatchToProp = (dispatch) => {
  return {
    setData: () => dispatch(setData()),
  };
  // set_data: (data)=> dispatch(set_data(data))
};

export default connect(mapStateToProps, mapDispatchToProp)(FreshRecomm);
