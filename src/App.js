import React,{useContext,useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Components/Signup/Signup.js'
import Login from './Components/Login/Login'
import Create from './Pages/Create.js'
import View from './Pages/ViewPost'
import  {AuthContext,FirebaseContext}  from './store/FirebaseContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Post from './store/PostContext';

function App() {

  const {firebase}=useContext(FirebaseContext)
  const {user,setUser}=useContext(AuthContext)


useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
},[])

  return (
    <div>
      <Post>
      <Router>
        <Route exact path={'/'}>
        <Home />
        </Route>
        <Route path={'/signup'}>
        <Signup />
        </Route>
        <Route path={'/login'}>
        <Login />
        </Route>
        <Route path={'/create'}>
        <Create />
        </Route>
        <Route path={'/view'}>
        <View />
        </Route>
      </Router>
      </Post>
     
    </div>
  );
}

export default App;
