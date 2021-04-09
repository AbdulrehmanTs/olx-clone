import React from 'react'
import './UserInfo.css'
import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';


class UserInfo extends React.Component {
    render() {
        return (
            <div className="userInfo-container">
                <ChatIcon className="icon" fontSize="large" />
                <NotificationsIcon className="icon" fontSize="large" />
                <img className="userImg" alt="user" src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/49b/9c2/246309532c8a323ff0089d341a.jpg" />
                <ExpandMoreIcon style={{ cursor: "pointer" }} fontSize="large" />
            </div>
        )
    }
}

export default UserInfo;