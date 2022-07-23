import React, { Component } from 'react';

class Pokemon extends Component {
  render() {  
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <section className='container-card'>
        <div className="infos">
          <h1>{name}</h1>
          <p>{type}</p>
          <p>Peso Medio: {value} {measurementUnit}</p>
       </div>
        <div className="card"key={id}>
          <img className="zero"src={image} alt={`Imagem do ${name}`}/>
          <img className="one"src={image} alt={`Imagem do ${name}`}/>
          <img className="two"src={image} alt={`Imagem do ${name}`}/>
          <img className="three"src={image} alt={`Imagem do ${name}`}/>
        </div>
      </section>
    )
  }
}

/* Pokemon.propTypes = {
  pokemon: propTypes.arrayOf(
    propType.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      type:  PropTypes.string,
      averageWeight: PropTypes.exact({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
      }),
      image: PropTypes.string,
      moreInfo: PropTypes.string,
    })
  )
} */

export default Pokemon