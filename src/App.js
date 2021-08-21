import React, {useState} from 'react'; 
import AboutApp from './Components/AboutApp';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App(){
    
    // State for Light and Dark mode
    const [mode , setMode] = useState('light');
    // changing the states of mode i.e. from light to dark and vice versa.
    const changeMode = () =>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#171717';
            document.body.style.color = 'white';
            // for displaying alert message
            displayAlert("Dark Mode has been enabled", "success");

        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            // for displaying alert message
            displayAlert("Light Mode has been enabled", "success");

        }
    } 

    // States of different alert messages
    // where we handle different alert messages
    const [alert , setAlert] = useState(null);
    
    const displayAlert = (message, typeOfAlert) =>{
        setAlert({
            msg: message,
            typeOfAlert: typeOfAlert
        })

        setTimeout(() =>{
            setAlert(null);
        }, 1000);
    } 
    

 return(
    <>
      <Navbar title="TextUtillApp" about="About App" mode={mode} changeMode={changeMode} />
      <Alert alert={alert}/>
      <div className="container">
          <TextForm heading="Enter you text that has to be analyzed!!" mode={mode} displayAlert = {displayAlert}/>
          {/* <AboutApp/> */}
      </div>
    </>
 );
 
}

export default App;