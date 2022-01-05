import React from "react";
import About from "./About";
import Header from "./Header";
import Bedroom from "./Bedroom";
import Journal from "./Journal";
import { Route, Switch } from 'react-router-dom'

function App () {
    return(
        <div>
          <Header />
          <Switch>
            <Route 
            path="/about"
            component={About}
            />
            <Route 
            path="/bedroom"
            component={Bedroom}
            />
            <Route 
            path="/journal"
            component={Journal}
            />
        </Switch>
        </div>
    );
}

export default App;