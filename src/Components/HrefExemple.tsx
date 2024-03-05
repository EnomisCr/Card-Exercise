import React, { useEffect, useRef } from 'react'


export const HrefExemple = () => {
    const myElementRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null >(null);
    
    const changeStyle = () =>{
      if(myElementRef.current){
        myElementRef.current.style.backgroundColor = "black"
        myElementRef.current.style.color = "white"
        myElementRef.current.innerText= "elemento modificato"
        
        inputRef.current?.focus()
      }
    }
    
    
    useEffect(() => {
      // Metti il focus sull'input quando il componente viene montato
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  return (
    <div>
    <h2> Modifico lo stile in questo elemento</h2>
    <div ref={myElementRef} style={{}}> 
      elemento da modificare </div>
      <input ref={inputRef} type="text" />
      <br />
    <button onClick={changeStyle}>cambia lo stile e mettimi nell'imput</button>      
  </div>
  )
}
