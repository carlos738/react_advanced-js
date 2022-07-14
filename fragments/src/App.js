import React, {Fragment} from 'react'


const store =['','','']

function Column(){
return(
  <tbody>
    
    <tr>
     <td>Tênis</td>
     <td>Roupa</td>
   </tr>
  </tbody>
)
}
function App(){
  const renderColumns =(element,key)=>(
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>
  )
  return(
    <table>
      {store.map(renderColumns)}
    </table>
  )
}
export default App