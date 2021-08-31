import React from 'react'
import './itemcard.css'

export default function ItemCard(props) {
    return (
        <div>
            <h5>{props.name}</h5>
            <a href={props.link}><img className="item-card" src={props.img} alt={props.name} /> </a>
        </div>
    )
}
