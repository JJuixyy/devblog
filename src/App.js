import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const routes = [
  {path:"/", name:"Home", Component:Home},
  {path:"/blog", name:"Blog", Component:Blog},
  {path:"/contact", name:"Contact", Component:Contact}
]


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <section className="container">
            <Switch>
                {routes.map(({path, Component})=>(
                  <Route key={path} exact path={path}>
                    {({match}) => (
                      
                        <>
                          <Component/>
                        </>
                      
                    )}
                  </Route>
                ))}
                  <Route path="/blog" component={Blog}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/" exact component={Home}/>
            </Switch>
          </section>
    </div>
  );
}

export default App;
