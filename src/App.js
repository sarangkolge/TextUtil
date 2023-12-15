import React, { useState } from 'react';
import './App.css';
import Forminput from './Forminput';
import Navbar from './Navbar';
import Alert from './Alert';
import Howtouse from './Howtouse';
import Contact from './Contact';
import {
  Routes, //in old version Swith hota tha but ab replace ho gaya hai Routes se
  Route,
  BrowserRouter
} from "react-router-dom";
import Footer from './Footer';

function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is on or not by default
  const [alert, setAlert] = useState(null);
  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type
    })                    // we can use as object
    setTimeout(() => {
      setAlert(null)
    }, 1500);           // for settime for removing alert msg on screen automatic
  }
  function toggleMode(){
   if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor ='#042743'; //becouse of our state and toggle is present in app.js thats why we use this easily
    showAlert("Dark Mode has been Enabled", "Sucess")
    document.title = 'TextUtil - Dark Mode';
   }else{
    setmode('light')
    document.body.style.backgroundColor ='white'; 
    showAlert("Light Mode has been Enabled", "Sucess")
    document.title = 'TextUtil - Light Mode';

   }
  }
  return (
<>
<BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
    <div className='container my-3'>
   
      <Routes>
        
        <Route path='/Forminput' element={<Forminput showAlert={showAlert} mode={mode} />}/>
        <Route path='/Howtouse' element={<Howtouse mode={mode} toggleMode={toggleMode} />}/>
        <Route path='/Contact' element={<Contact mode={mode} toggleMode={toggleMode} />}/>
               
        </Routes>
    </div>
</BrowserRouter>
<Footer />
 


</>
  
  );
}
export default App;
