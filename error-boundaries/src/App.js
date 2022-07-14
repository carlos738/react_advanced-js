import React, { Fragment } from 'react'

const store = [{
  type: 'Roupa'
}, {
  type: 'Calçado'
}, {
  type: 'Camiseta'
}]

function Column({ type }) {
  return (
    <tbody>
      
        <tr>
      <td>{type}</td>
    </tr>
    </tbody>

  )
}

function App() {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>
  )
  
  return (
    <table>
      
        {store.map(renderColumns)}        
      
    </table>
  )
}

export default App