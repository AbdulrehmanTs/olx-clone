import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default class ItemCard extends React.Component {
    render() {
        return (
            <div style={styles.cardContainer}>
                <div style={styles.Header}>
                    <p style={styles.type}>{this.props.type}</p>
                    <img style={styles.featuredImage} src={this.props.image} alt="Item"/>
                    <FavoriteBorderIcon style={styles.favIcon} />
                </div>

                <div style={styles.description}>
                    <h1 style={styles.cost}>Rs.{this.props.cost}</h1>
                    <p style={styles.ItemDesc}>{this.props.description}</p>
                    <p style={styles.date}>{this.props.date}</p>
                </div>
            </div>
        )
    }
}


// component Styles
const styles = {
    cardContainer: {
        border: "1px solid lightgrey",
        borderRadius: "3px solid darkgrey",
        backgroundColor: "white",
        width: "270px",
        height: "300px",
        marginTop: "20px",
    },

    Header: {
        display: "flex",
        height: "200px",
        position: "relative", 
        justifyContent: 'center',
        alignItem: "center"
    },
    featuredImage: {
        maxWidth: "240px",
        maxHeight: "180px",
        position: "absolute",
        margin: "10px",
        alignItem: "center",
        justifyContent: "center"
    },
    type: {
        position: "relative",
        marginTop: "15px",
        marginLeft: "-180px",
        color: "black",
        padding: "2px",
        background: "rgb(255, 238, 0)",
        fontSize: "10px",
        height: "18px",
        fontWeight: "bold",
        zIndex: 3,
        float: "left"
    },
    favIcon: {
        position: "relative",
        zIndex: 2,
        marginTop: "10px",
        transform: "translateX(180px)",
        fontSize: 25
    },
    description : {
        position: "relative",
        width: "250px",
        height: "100px",
        overflow: "hidden",
        padding: "10px",
        borderLeft: "10px solid rgb(255, 217, 0)",
        borderBottomLeftRadius: "3px",
    },
    cost:{
        color: "#20413c",
        fontSize: "20px",
    },
    ItemDesc:{
        display: "inline",
        fontSize: "15px",
        color: "#798d8a",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "100%"
    },
    date:{
        float: "right",
        marginTop: "10px",
        fontSize: "9px",
        color: "slategray"
    }
}


