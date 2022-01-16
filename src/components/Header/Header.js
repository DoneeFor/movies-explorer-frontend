import React from 'react';
import Navigation from "../Navigation/Navigation";
import logoImage from "../../images/logo.svg";
import { Link, Route, Switch } from "react-router-dom";

import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header_colored">
          <div className="header__wrap">
            <Link to="/">
              <img src={logoImage} alt="Логотип сайта" />
            </Link>
            <Navigation isLoggedIn={isLoggedIn} isHeaderColored={true} />
          </div>
        </header>
      </Route>
      <Route path="/(movies|saved-movies|profile)">
        <header className="header">
          <div className="header__wrap">
            <Link to="/">
              <img src={logoImage} alt="Логотип сайта" />
            </Link>
            <Navigation isLoggedIn={isLoggedIn} isHeaderColored={false} />
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;