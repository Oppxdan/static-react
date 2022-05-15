import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src=
            {props.item.coverImg}
            className="card-image" />
            <div className="card-stats">
                <img src=
                "https://media.istockphoto.com/photos/gold-star-picture-id118192475?b=1&k=20&m=118192475&s=170667a&w=0&h=PNHionJvJVLb6-iDP9-3sc6Xw-qwbkbn-HiEJC92A-g="
                className="card-star"/>
                <span>{props.item.stats.rating} </span>
                <span className="gray"> ({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price} </span> / person</p>
        </div>
    )
}