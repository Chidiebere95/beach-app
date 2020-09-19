// import React from 'react'
import Hero from "../Components/Hero";

import React, { Component } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import{StyledHero} from '../Components/StyledHero'
import Banner from '../Components/Banner'

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
    };
    // console.log(this.state.slug);
  }

  static contextType = Context;
  render() {
  
    const { specificRoom } = this.context;
    const ourValue = specificRoom(this.state.slug);
    let {description,images,pets,price,size,name,slug,type,breakfast,capacity,extras}=ourValue
    console.log(images)
    const [img1,...img]=images
    console.log(ourValue);
    if (!ourValue) {
      return (
        <div className="error">
          <h1>nothing was found for this room...</h1>
          <Link to="/" className="btn-primary">
            back to home
          </Link>
        </div>
      );
    } 
    return<div>
<StyledHero img={img1}>
       <Banner title={ourValue.name}>
           <Link to='/rooms' className='btn-primary'>go to rooms page</Link>
       </Banner>
    </StyledHero>;
    <section className='single-room'>
      <div className='single-room-images'>
      {img.map((item,index)=><img src={item} key={index}></img>)}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>details</h3>
  <p>{description}</p>
  
        </article>
        <article className='info'>
    <h3>info</h3>
  <h6>{`size: $${size}SQFT`}</h6>
  <h6> capacity: {capacity>1?` ${capacity} people` : `${capacity} person`}</h6>
  <h6>{pets&&'pets allowed'}</h6>
  <h6>{breakfast&&'free breakfast'}</h6>
 
  </article>
  <article className >
    <ul>
  {extras.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
  </article>
      </div>
    </section>
    </div>
    
    
  }
}
