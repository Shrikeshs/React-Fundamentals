import React, { Component, useState } from 'react';

function CounterExample() {
    const [count,setCount] = useState(0);
    return (
      <div> 
        <h1>
            {count}    
        </h1>    
        <h1 onClick={()=> setCount(count+1)}>
            Increase
        </h1>  
        <h1 onClick={()=> setCount(count-1)}>
            Decrease
        </h1> 
    </div>
    );
  
}

export default CounterExample;
