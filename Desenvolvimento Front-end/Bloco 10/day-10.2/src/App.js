import React, { Component } from "react";
import Image from "./Image";
import Album from './Album'
const { album01, album02 } = require('./albums/albums');


class App extends Component {
  render() {
    return (
      <section>
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeTextlt="foto de um gato" width="500px" height="300px"/>
        <Album album={ album01 } />
        <Album album={ album02 } />        
      </section>
    )
  }
}

export default App;