import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
export default function Error() {
    return (
       <Hero>
           <Banner title='404' subtitle='page not found'>
                <Link  className='btn-primary' to='/'>return home</Link>
           </Banner>
       </Hero>
    )
}
