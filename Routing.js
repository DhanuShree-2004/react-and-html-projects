index.js:

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Joinus from "./Joinus";
const routing=(
    <Router>
        <div>
            <h1> About BATA</h1>
    <Routes>
      <Route path="/h"element={<Home/>}/>
      <Route  path="/a" element={<About/>}/>
      <Route path="/j" element={<Joinus/>}/>
    </Routes>
    </div>
    </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(routing);
-------------------------------------------------------------------------------------------------------------------------
  Home.js:

import React, { Component } from "react";
import s from'./s.jpeg';
import s1 from'./s1.jpeg';
class home extends Component{
        render(){
            return(
            <div>
                <div>
                    <div>
                    <img src={s} alt='logo' width="300" height="200" ></img>
                    <img src={s1} alt='logo' width="300" height="200" ></img>
                    </div>
                    <br/>
                    <br/>
                

                </div>
            </div>
            );
    }
}

export default home;
------------------------------------------------------------------------------------------------------------------
  About.js:

import React, { Component } from "react";
import s from'./s.jpeg';
import s1 from'./s1.jpeg';
class About extends Component{
    render(){
        return(
            <div>
                <img src={s} alt='logo' width="300" height="200" ></img>
                <img src={s1} alt='logo' width="300" height="200" ></img>
                <p style={{color:"black"}}>
                Bata, a renowned footwear brand, offers a diverse range of shoes to cater to various needs and preferences. 
                Their women's sandals collection features a wide range of designs, materials, and colours, perfect for adding
                a touch of elegance to any outfit.From casual flip-flops to chic wedges and comfortable flats, Bata's women's 
                 sandals are designed with style and comfort in mind.
                </p>
            </div>
        );
    }
}

export default About;
----------------------------------------------------------------------------------------------------------------------------------------------
  Joinus.js:

import React from "react";


class Join extends React.Component{
    render(){
        return(
            <div>
                <h1>Join us</h1>
                <p>Welcome to the Join page</p>
                
            </div>
        );
    }}

    export default Join;
-------------------------------------------------------------------------------------------------------------------------------------------------------
