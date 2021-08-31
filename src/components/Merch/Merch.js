import React from 'react'
import './merch.css'
import curtain from './images/curtain.jpg'
import bookbag from './images/bookbag.jpg'
import top from './images/top.jpg'
import matcha from './images/matcha.jpg'
import ItemCard from '../ItemCard/ItemCard'
import tank from './images/tank.jpg'
import apron from './images/apron.jpg'
import legging from './images/legging.jpg'

export default function Merch() 
{
    let list = [
        {
            name: 'They Fall at 5 Centimeters Per Second Shower Curtain',
            img: curtain,
            link: 'https://www.redbubble.com/i/shower-curtain/They-Fall-at-5-Centimeters-Per-Second-by-GirlyProgrammer/86646824.YH6LW?asc=u'
        },
        {
            name: 'They Fall at 5 Centimeters Per Second Backpack',
            img: bookbag,
            link: 'https://www.redbubble.com/i/backpack/They-Fall-at-5-Centimeters-Per-Second-by-GirlyProgrammer/86646824.K1KHE?asc=u'
        },
        {
            name: 'Everyday is Leg Day Racerback Tank Top',
            img: tank,
            link: 'https://www.redbubble.com/i/tank-top/Everyday-is-Leg-Day-by-GirlyProgrammer/86698900.N283C'
        },
        {
            name: "Everyday is Leg Day Sleeveless Top",
            img: top,
            link: "https://www.redbubble.com/i/top/Everyday-is-Leg-Day-by-GirlyProgrammer/86698900.6AQD3?asc=u"
        },
        {
            name: 'I love you so matcha! Premium T-Shirt',
            img: matcha,
            link: 'https://www.redbubble.com/i/t-shirt/I-love-you-so-matcha-by-GirlyProgrammer/86543201.LKP5W?asc=u'
        },
        {
            name: 'I love you so matcha! Apron', 
            img: apron,
            link: 'https://www.redbubble.com/i/apron/I-love-you-so-matcha-by-GirlyProgrammer/86543201.6ZXWR?asc=u'
        },
        {
            name: 'Spring is Here Leggings',
            img: legging,
            link: 'https://girly-programmer.creator-spring.com/listing/spring-is-here-august-2021?product=641&variation=102636&size=4161'
        }
    
    ]

    const allCards = list.map(obj => <ItemCard key={obj.name} name={obj.name} img={obj.img} link={obj.link} />)
    return (
        <div className="merch-grid">
            {allCards}
        </div>
    )
}
