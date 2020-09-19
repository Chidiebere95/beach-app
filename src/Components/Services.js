import React, { Component } from "react";
import Title from "./Title";
import Service from './Service'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: "fas fa-cocktail",
        title: "Free cocktail",
        info: "lorem ipsum dunt maer tum nuen cum lip suen doen comp duen",
      },
      {
        icon: "fas fa-hiking",
        title: "Endless Hiking",
        info: "lorem ipsum dunt maer tum nuen cum lip suen doen comp duen",
      },
      {
        icon: "fas fa-shuttle-van",
        title: "Free shuttle",
        info: "lorem ipsum dunt maer tum nuen cum lip suen doen comp duen",
      },
      {
        icon: "fas fa-beer",
        title: "strongest beer",
        info: "lorem ipsum dunt maer tum nuen cum lip suen doen comp duen",
      },
    ],
  };
  render() {
    // let span=this.state.services.map(item=><div key={item.icon}>{item.icon}</div>)

    let serve = this.state.services.map((item, index) => {
      return (
        <Service
          key={index}
          icon={item.icon}
          title={item.title}
          info={item.info}
        />
      );
    });
    console.log(serve);
    
    return (
      <section className='services'>
        <Title title="services" />
        <div className='services-center'>
          {serve}
        </div>
        {/* <div>{span}</div> */}
      </section>
    );
  }
}
