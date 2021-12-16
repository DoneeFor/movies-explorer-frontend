import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import UserContext from "../../context/userContext";
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  function debugUserSet(state) {
    setCurrentUser(state);
  }
  useEffect(() => {
    debugUserSet(1);
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <div className='App'>
        <BrowserRouter basename='/'>
          <Header />
          <Switch>
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies />
            </Route>
            <Route path='/signup'>
              <Register />
            </Route>
            <Route path='/signin'>
              <Login />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
