import React, { useEffect } from "react";
import { Route, Switch, useHistory, BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from '../../utils/auth';

import UserContext from "../../context/userContext";
import './App.css';

function App() {

  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  function debugUserSet(state) {
    setCurrentUser(state);
  }
  useEffect(() => {
    debugUserSet(1);
  }, []);

  function onRegister(data) {
    const { name, email, password } = data;
    auth
      .getRegister(name, email, password)
      .then((res) => {
        if (res) {
          onLogin(email, password);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogin(email, password) {
    auth
      .getLogin(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 400) {
          return console.log('не передано одно из полей');
        } else if (err.status === 401) {
          return console.log('пользователь с email не найден');
        }
        return console.log(err.status);
      });
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .catch((err) => {
          console.log(err.status);
          if (err.status === 401) {
            return console.log('Переданный токен некорректен ');
          } else if (!jwt) {
            return console.log('Токен не передан или передан не в том формате');
          }
          return console.log('error 500');
        });
    }
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={currentUser}>
      <div className='App'>
        <BrowserRouter basename='/'>
          <Header isLoggedIn={isLoggedIn}/>
          <Switch>
            <ProtectedRoute
              exact path="/movies"
              component={Movies}
              isLoggedIn={isLoggedIn}
            />
            <ProtectedRoute
              exact path="/saved-movies"
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
            />
            <Route path="/signup">
              <Register onRegister={onRegister} />
            </Route>
            <Route path="/signin">
              <Login onLogin={onLogin} />
            </Route>
            <ProtectedRoute
              path="/profile"
              component={Profile}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
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
