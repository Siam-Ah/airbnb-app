import React from "react"
import star from "../images/star.png"

// Component that displays individual card information
export default function Card(props) {
    let badgeText

    // Sets badge text based on availability and location
    if (props.data.openSpots === 0) {
        badgeText="SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "Online"
    }
    return (
        <div className="card">
            {badgeText  && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.data.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) • </span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><span className="bold">From ${props.data.price}</span> / person</p>
        </div>
    )
}