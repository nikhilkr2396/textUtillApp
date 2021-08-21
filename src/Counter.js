import React, {useState} from 'react'; 

function Counter(){
 let [counter, setCounter]  = useState(0);
 
 return(
    <div>
        <h1>Learning React </h1>
        <h3>Update the counter {counter}</h3>
        <h6>NOTE : The counter lies between 0 and 25. </h6>
        <button onClick={() => counter<25 ? setCounter(counter+1) : setCounter(25)}>Increase the counter</button>
        <br/><br/>
        <button onClick={() => counter>0 ? setCounter(counter-1) : setCounter(0)}>Decrease the counter</button>
        <br/><br/>
        <button onClick={() => setCounter(0)}>Reset the counter</button>
        
    </div>
 )
 
}

export default Counter;