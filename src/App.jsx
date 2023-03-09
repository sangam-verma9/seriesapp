import React from 'react';
import Card from './Card';
import Sdata from './Sdata'
function ncard (val){
  return(
    <Card
    key={val.id} // for removing error in console 
    image={val.image}
    catagoryname={val.catagoryname}
    name={val.name}
    link={val.link}
    />
  )
}
const App =()=>{
  return (
    <>
    <h2 className='mainheading'>List of top series on Netflix</h2>
    {Sdata.map(ncard)}
    </>
  )
}
export default App;

