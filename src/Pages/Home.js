import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import Loading from '../Components/Loading'
import FeaturedRooms from '../Components/FeaturedRooms'

export default function Home() {
    return (
        <React.Fragment>
            <Hero hero='defaultHero'>
                <Banner title='Luxurious rooms' subtitle='deluxe rooms starting at $299'>
                    <Link className='btn-primary' to='/rooms'>Our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
         
            <FeaturedRooms/>
        </React.Fragment>
        
        
    )
}
