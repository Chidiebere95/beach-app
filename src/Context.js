// // const Provider=context.Provider
// import React, { Component } from "react";
// import array from "./data";
// const Context = React.createContext();

//  class Provider extends Component {
//   state = {
//     data: array,
//     rooms: "",
//     sortedRooms: "",
//     featuredRooms: "",
//     loading: true,
//   };

//   componentDidMount = () => {
//     let mainRoom = (data) => {
//       console.log(data);

//       let mapped = data.map((item) => {
//         // console.log(item);
//         let id = item.sys.id;
//         let mainImages = item.fields.images.map((img) => img.fields.file.url);
//         let mainArray = { ...item.fields, images: mainImages, id };
//         console.log(mainArray);

//         return mainArray;
//       });
//       console.log(mapped);

//       return mapped;
//     };
//     let ourRoom = mainRoom(this.state.data);
//     // console.log(ourRoom);
//     let featured=ourRoom.filter(item=>item.featured===true)
//     console.log(featured);
//     this.setState({featuredRooms:featured,loadinga:false})
//     // let data = array.map((item) => {
//     //   // console.log(item);
//     //   let id = item.sys.id;
//     //   // console.log(id);
//     //   let filteredImages = item.fields.images.map((img) => img.fields.file.url);
//     //   let featuredRooms;
//     //   // console.log(images);

//     //   let wholeRoom = { ...item.fields, images: filteredImages, id };
//     //   //   console.log(wholeRoom);
//     //   this.setState({ rooms: wholeRoom, sortedRooms: wholeRoom });
//     // });
//   };

//   render() {
//     return (
//       <Context.Provider value={{...this.state}}>{this.props.children}</Context.Provider>
//     );
//   }
// }
// const Consumer= Context.Consumer;
// export{Provider,Consumer,Context}

// import React from 'react'
import array from "./data";

import React, { Component } from "react";
const Context = React.createContext();
const Provider = Context.Provider;
class ProviderContainer extends Component {
  state = {
    data: array,
    rooms: "",
    sortedRooms: "",
    featuredRooms: "",
    loading: true,
    type:'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxsize:0,
    breakfast:false,
    pets:false
  };

  componentDidMount = () => {
    let mainRoom = (data) => {
      // console.log(data);

      let mapped = data.map((item) => {
        // console.log(item);
        let id = item.sys.id;
        let mainImages = item.fields.images.map((img) => img.fields.file.url);
        let mainArray = { ...item.fields, images: mainImages, id };
        // console.log(mainArray);//must always always be an item(object)

        return mainArray;
      });
      // console.log(mapped);//must always always be an array

      return mapped; //from the end of the function,return this value, ie this is what we want out of this function
    };
    // const arraydata=[...this.state.data];
    //then i would have done let ourRoom = mainRoom(arraydata)
    let ourRoom = mainRoom(array);
    // console.log(ourRoom);
    let featured = ourRoom.filter((item) => item.featured === true);
    // console.log(featured);
    this.setState({ rooms: ourRoom, sortedRooms:ourRoom, featuredRooms: featured, loading: false });
    // let data = array.map((item) => {
    //   // console.log(item);
    //   let id = item.sys.id;
    //   // console.log(id);
    //   let filteredImages = item.fields.images.map((img) => img.fields.file.url);
    //   let featuredRooms;
    //   // console.log(images);

    //   let wholeRoom = { ...item.fields, images: filteredImages, id };
    //   //   console.log(wholeRoom);
    //   this.setState({
    //     rooms: wholeRoom,
    //     sortedRooms: wholeRoom,
    //     loading: false,
    //   });
    // });
  };
  giveSpecificRoom = (par) => {
    const data = [...this.state.rooms];
    // console.log(data);

    const edit = data.find((item) => item.slug === par);
    return edit;
  };

  handleChange=(event)=>{
    const name=event.target.name
    // const type=event.target.type
    const value=event.target.value
    const checked=event.target.checked
    // console.log(name,type,value)
    this.setState({
      [name]:value
    },this.setStateCallBackFunction)
  }
  setStateCallBackFunction=()=>{
const{rooms,type,capacity,price,minPrice,maxPrice,minSize,maxsize,breakfast,pets}=this.state
//  console.log(rooms)
let tempRooms=[...rooms]
if (type!=='all'){
  tempRooms=tempRooms.map(item=>item.type===type)
}
this.setState({sortedRooms:tempRooms})
}

  render() { 
    return (
      <Provider value={{ ...this.state,handleChange:this.handleChange, specificRoom: this.giveSpecificRoom }}>
        {this.props.children}
      </Provider>
    );
  }
}
const Consumer=Context.Consumer


export { Context, Provider, ProviderContainer ,Consumer};
