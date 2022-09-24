import React from "react";
import Navbars from "./Redux/Navbar";
import {Route,Routes} from 'react-router-dom'
// import Home from "./Redux/Home";
// import Employees from "./Redux/Employees";
// import Counter from "./Redux/Counter";
// import Users from "./Redux/Users";
import {User} from './Redux'

import {Employees} from './Redux'
import {Counter} from './Redux'
import {Home} from './Redux'

    
import {store} from './Redux/Store.js';
import {Provider} from 'react-redux';

function App() {

 
  
  return(
    <div >
     
     <Navbars/>
     <Provider store={store}>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/employees' element={<Employees/>}/>
       <Route path='/counter' element={<Counter/>}/>
       <Route path='/users' element={<User/>}/>
     </Routes>
     </Provider> 
    </div>
    
  )



}

  
export default App;
