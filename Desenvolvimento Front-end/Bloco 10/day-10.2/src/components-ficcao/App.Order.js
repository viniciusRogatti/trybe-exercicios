// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import Order from './Order';
import Image from './Image';

class AppOrder extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };
    
    const array = [ headphone, energyDrink ];
    return (
      <div>
        <h1> Orders recently created </h1>
         {array.map((e) => <Order order = { e }/>)}
         <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring"/>
      </div>
    );
  }
}

export default AppOrder;