import React from "react"
import data from "./data"

export default function Card(props) {
    return (
        <div className="card">
            <img src=
            {props.img}
            className="card-image" />
            <div className="card-stats">
                <img src=
                "https://media.istockphoto.com/photos/gold-star-picture-id118192475?b=1&k=20&m=118192475&s=170667a&w=0&h=PNHionJvJVLb6-iDP9-3sc6Xw-qwbkbn-HiEJC92A-g="
                className="card-star"/>
                <span>{props.stars} </span>
                <span className="gray"> ({props.reviews}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.rate} </span> / person</p>
        </div>
    )
}