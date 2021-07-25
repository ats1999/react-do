import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EditorLight from "./editor-light";
import EditorDark from "./editor-dark";
import EditorDarkAll from "./editor-all-dark";
import EditorLightAll from "./editor-all-light";
import EditorWYSWYG from "./editor-wyswyg";
import ViewerDark from "./viewer-dark";
import ViewerLight from "./viewer-light";

import "./App.css";

const links = [
  ["Editor light","/editor-light",<EditorLight/>],
  ["Editor dark","/editor-dark",<EditorDark/>],
  ["Editor dark all","/editor-dark-all",<EditorDarkAll/>],
  ["Editor light all","/editor-light-all",<EditorLightAll/>],
  ["Editor WYSWYG","/editor-wyswyg",<EditorWYSWYG/>],
  ["Viewer dark","/viewer-dark",<ViewerDark/>],
  ["Viewer light","/viewer-light",<ViewerLight/>]
]

const Nav=()=>{
  return <ul>
    {links.map(link=>{
      return <li key={link[0]}>
        <Link to={link[1]}>
          {link[0]}
        </Link>
      </li>
    })}
  </ul>
}

export default function App() {
 return <Router>
   <Switch>
     <Route path="/" exact>
       <Nav/>
     </Route>
     {links.map(link=><Route key={link[0]} path={link[1]}>
       {link[2]}
     </Route>)}
   </Switch>
 </Router>
}
