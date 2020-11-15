import React from "react";
import Counter from "./Counter";
import FooPropTest from "./FooPropTest";
import LoaderHi from "./LoaderHi";
import TestName from "./RenderName";
import PlayStop from "./StopPlay";
import TestForm from "./TitleInt";
import LifeReact from "./LifeReact";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <BrowserRouter>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/fooproptest">FooPropTest</Link>
        </li>
        <li>
          <Link to="/loaderhi">LoaderHi</Link>
        </li>
        <li>
          <Link to="/testname">ReName</Link>
        </li>
        <li>
          <Link to="/playstop">Play Stop</Link>
        </li>
        <li>
          <Link to="/testform">Input</Link>
        </li>
        <li>
          <Link to="/lifereact">Life React</Link>
        </li>
        <Switch>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/testname">
            <TestName />
          </Route>
          <Route path="/fooproptest">
            <FooPropTest />
          </Route>
          <Route path="/loaderhi">
            <LoaderHi />
          </Route>
          <Route path="/playstop">
            <PlayStop />
          </Route>
          <Route path="/testform">
            <TestForm />
          </Route>
          <Route path="/lifereact">
            <LifeReact />
          </Route>
        </Switch>
      </BrowserRouter>
    </nav>
  );
};

export default Nav;
