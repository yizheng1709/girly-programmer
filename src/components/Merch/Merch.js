import React from 'react'
import './merch.css'
import curtain from './images/curtain.jpg'
import bookbag from './images/bookbag.jpg'
import top from './images/top.jpg'
import matcha from './images/matcha.jpg'
import ItemCard from '../ItemCard/ItemCard'
import tank from './images/tank.jpg'
import apron from './images/apron.jpg'
import dress from './images/dress.jpg'
import shower from './images/shower.jpg'
import book from './images/book.jpg'
import muscles from './images/muscles.jpg'
import phone from './images/phone.jpg'
import pin from './images/pin.jpg'
import mat from './images/mat.jpg'
import note from './images/note.jpg'
import roll from './images/roll.jpg'
import tote from './images/tote.jpg'
import boba from './images/boba.jpg'

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
            name: 'Obsessed with Sakura A-Line Dress',
            img: dress,
            link: 'https://www.redbubble.com/i/dress/Obsessed-with-Sakura-by-GirlyProgrammer/87312000.V4WQ8?asc=u'
        },
        {
            name: 'Obsessed with Sakura Shower Curtain',
            img: shower, 
            link: 'https://www.redbubble.com/i/shower-curtain/Obsessed-with-Sakura-by-GirlyProgrammer/87312000.YH6LW?asc=u'
        },
        {
            name: 'Obsessed with Sakura Hardcover Journal',
            img: book, 
            link: 'https://www.redbubble.com/i/notebook/Obsessed-with-Sakura-by-GirlyProgrammer/87312000.RXH2R?asc=u'
        },
        {
            name: 'this took discipline and dedication Tank Top',
            img: muscles,
            link: 'https://www.redbubble.com/i/tank-top/this-took-discipline-and-dedication-by-GirlyProgrammer/86887593.Z81UR?asc=u'
        },
        {
            name: 'this took discipline and dedication iPhone Case & Cover',
            img: phone,
            link: 'https://www.redbubble.com/i/iphone-case/this-took-discipline-and-dedication-by-GirlyProgrammer/86887593.23I0V?asc=u',

        },
        {
            name: 'this took discipline and dedication Pin',
            img: pin,
            link: 'https://www.redbubble.com/i/pin/this-took-discipline-and-dedication-by-GirlyProgrammer/86887593.NP9QY?asc=u'
        },
        {
            name: 'I am <human /> Mouse Pad',
            img: mat,
            link: 'https://www.redbubble.com/i/mouse-pad/I-am-human-by-GirlyProgrammer/86882232.GAP22?asc=u'
        },
        {
            name: 'I am <human /> Spiral Notebook',
            img: note,
            link: 'https://www.redbubble.com/i/notebook/I-am-human-by-GirlyProgrammer/86882232.WX3NH?asc=u'
        },
        {
            name: "that's how i roll Tri-blend T-Shirt",
            img: roll, 
            link: 'https://www.redbubble.com/i/t-shirt/that-s-how-i-roll-by-GirlyProgrammer/86520541.SWO0S?asc=u'
        },
        {
            name: "that's how i roll Tote Bag",
            img: tote,
            link: 'https://www.redbubble.com/i/tote-bag/that-s-how-i-roll-by-GirlyProgrammer/86520541.P1QBH?asc=u'
        },
        {
            name: 'best-teas forever! Cap',
            img: boba,
            link: 'https://www.redbubble.com/i/hat/best-teas-forever-by-GirlyProgrammer/86216093.XAK6W?asc=u'
        }
    
    ]

    const allCards = list.map(obj => <ItemCard key={obj.name} name={obj.name} img={obj.img} link={obj.link} />)
    return (
        <div className="merch-grid">
            {allCards}
        </div>
    )
}
