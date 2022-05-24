import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React,{useState} from 'react'
import Alert from './components/Alert'
import { BrowserRouter as Router,
  Routes, 
  Route, 
  Link } from "react-router-dom";



 function App() {
   const [mode, setMode] = useState('light')
   const [alert,setAlert] = useState(null)
   const showAlert=(message,type)=>{
     setAlert({
       msg: message,
       type:type
     })
     setTimeout(()=>{
       setAlert(null);
     },3000);
   }
   const toggleMode=()=>{
     if(mode==='light')
     {
       setMode('dark')
       document.body.style.backgroundColor='grey'
       showAlert("Dark Mode has been enabled","success")
       document.title="TextUtils-Dark Mode"
     }
     else {
       setMode('light')
       document.body.style.backgroundColor='white'
       showAlert("Light Mode has been enabled","success")
       document.title="TextUtils-Light Mode"
     }
   }
  return (
    <>
   <Router>
    <Navbar title="TextUtils2" about="About Barnik" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
{/*<About/>*/}
</div>
</Router>
    </>
  );
}

export default App;
