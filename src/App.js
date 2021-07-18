import React ,{ Suspense }from 'react';
import { RouteComponentProps } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from './routes/routes';
function App() {

  return (
    <>
    <Router> 
<Suspense fallback={<div></div>}>

<Switch>
  {routes.map((item,index)=>(
    

    <Route key={index} path={item.path} exact={item.exact} 
    render={props=><item.page {...props}/>}/>
  ))}
  </Switch>
  </Suspense>

    </Router>
    
    </>
  );
}

export default App;
