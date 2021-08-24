import './banner.css'
import banner from './banner.png' 

import React from 'react'

export default function Banner() {
    return (
        <>
          <img src={banner} alt="banner" className="banner"/>  
        </>
    )
}
