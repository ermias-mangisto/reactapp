import React from "react";
import {Route,Routes,BrowserRouter,Link } from "react-router-dom"
import Kid from "../kidComponent/kid";
import Teacher from "../teacherComponent/teacher";
import Parent from "../parentComponent/parent";
import HomePage from "../homeComponent/homePage";

function Routing(){
    return(
        <BrowserRouter>

           <Link to ="/">home</Link>
          <Link to="/kid">kid</Link>
          <Link to ="/parent">parent</Link>
          <Link to ="/teacher">teacher</Link>
         
     
       
        <Routes>
<Route exact path="/" element={<HomePage/>}/>
<Route  path="/kid" element={<Kid/>}/>
<Route  path="/Teacher" element={<Teacher/>}/>
<Route  path="/Parent" element={<Parent/>}/>
        </Routes>
     </BrowserRouter>
    )
    }
    export default Routing;