import React from 'react'
import RoomsList from './RoomsList'
import Title from './Title'
import {useContext} from 'react'
import {Context} from '../Context'
export default function RoomsFilter({rooms}){
    const context=useContext(Context)
    // console.log(context)
    const{type,capacity,price,minPrice,maxSize,breakfast,pets,handleChange}=context;
    console.log(rooms)
    // console.log(type)

    return(
        <section className='filter-container'>
            <Title title='search forms'/>
            <form className='filter-forms'>
                <div className='form-group'>
                <label htmlFor='type'>room type</label>
            <select name="type" id='type' className='form-control' value={type} onChange={handleChange}>
            <option value='all'>all</option>
            <option value='single'>single</option>
            <option value='double'>double</option>
            <option value='family'>family</option>
            <option value='presidential'>presidential</option>
            </select>
                </div>
            </form>
            
        </section>
    )
}