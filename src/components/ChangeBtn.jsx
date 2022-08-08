import { useState, useEffect } from "react";

const colors =['red', 'teal', 'yellow', 'green', 'blue']


const ChangeBtn = () => {
   const [color, setColor] = useState('');
 
   useEffect(()=>{
      document.body.style.backgroundColor = colors[rndnum];
      // console.log(rndnum);
 }, [color])
  
   
   function rndfunc(){
     return Math.floor(Math.random() * colors.length)
   }
   
   let rndnum = rndfunc();
   
   
   function handleClick() {
      let rndcol = rndfunc();
      
      setColor(rndcol)
     
   }
 
 
   return (
      <div className='disp'>
      <h2 className="c-name">Background Color: <span className="c-name">{colors[rndnum]}</span> </h2>
      <button onClick={handleClick}>change</button> 
      </div>
   )
 }

export default ChangeBtn