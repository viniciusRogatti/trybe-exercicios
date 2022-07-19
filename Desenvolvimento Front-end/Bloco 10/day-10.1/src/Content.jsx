import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div className='Content'>
        {conteudos.map((e) => (
          <ul key={e.conteudo}  className='Card'>
            <li className='Card-Content'>Conteudo: {e.conteudo}</li>
            <li className='Card-Content'>Status: {e.status}</li>
            <li className='Card-Content'>Bloco: {e.bloco}</li>
          </ul>
        ))}
      </div>
    )
  }
}

export default Content;