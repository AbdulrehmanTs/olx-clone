import React from 'react'
import { BrowserRouter as Router, Route , Redirect} from 'react-router-dom'


import About from '../screens/About'
import Home from '../screens/Home'
import MobilePhones from '../screens/MobilePhones'
import Cars from '../screens/Cars'
import Motorcycles from '../screens/Motercycles'
import Houses from '../screens/Houses'
import TvVideoAudio from '../screens/TvVideoAudio'
import Tablets from '../screens/Tablets'
import LandsAndPlots from '../screens/LandsAndPlots'

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path="/mobilephones" component={MobilePhones} />
                    <Route exact path="/motorcycles" component={Motorcycles} />
                    <Route exact path="/cars" component={Cars} />
                    <Route exact path="/houses" component={Houses} />
                    <Route exact path="/tvvideoaudio" component={TvVideoAudio} />
                    <Route exact path="/tablets" component={Tablets} />
                    <Route exact path="/landsandplots" component={LandsAndPlots} />
                    <Redirect to="/" />
                </Router>
            </div>
        )
    }
}

export default AppRouter;