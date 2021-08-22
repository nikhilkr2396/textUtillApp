import React, {useState} from 'react'; 
import AboutApp from './Components/AboutApp';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
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
            // changing title for dark mode
            document.title = "TextUtillApp - Dark Mode";

        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            // for displaying alert message
            displayAlert("Light Mode has been enabled", "success");
            // changing title for light mode
            document.title = "TextUtillApp - Light Mode";
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
    <Router>
      <Navbar title="TextUtillApp" about="About App" mode={mode} changeMode={changeMode} />
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <AboutApp/>
          </Route>
          <Route exact path="/textUtillApp">
              <TextForm heading="Enter you text that has to be analyzed!!" mode={mode} displayAlert = {displayAlert}/>
          </Route>
          <Route exact path="/">
              <TextForm heading="Enter you text that has to be analyzed!!" mode={mode} displayAlert = {displayAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
 );
 
}

export default App;