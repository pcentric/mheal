import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Responsibility from "./Pages/Responsibility";
import ChestXRay from "./Pages/Products/ChestXRay";
import HeadCTScan from "./Pages/Products/HeadCTScan";
import PHS from "./Pages/Products/PHS";
import TB from "./Pages/Products/TB";
import highlights from "./Pages/Research/highlights";
import publications from "./Pages/Research/publications";
import Covid from "./Pages/Products/Covid";

function App() {
  return (
    <>
      <Nav />
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About}/>
          <Route path="/Responsibility" component={Responsibility}/>
          <Route path="/Chest__X-ray" component={ChestXRay}/>
          <Route path="/HeadCT" component={HeadCTScan}/>
          <Route path="/PHS" component={PHS}/>
          <Route path="/TB" component={TB}/>
          <Route path="/highlights" component={highlights}/>
          <Route path="/publications" component={publications}/>
          <Route path="/Covid_19" component={Covid}/>
        </Switch>
      </React.Fragment>
      <Footer />  
    </>
  );
}

export default App;
