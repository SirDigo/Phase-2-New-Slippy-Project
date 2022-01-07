import React from "react";
import About from "./About";
import Header from "./Header";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";
import Journal from "./Journal";
import Garden from "./Garden";
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
                path="/livingroom"
                component={LivingRoom}
                />
                <Route 
                path="/journal"
                component={Journal}
                />
                <Route 
                path="/garden"
                component={Garden}
                />
                <Route 
                path="/"
                component={Bedroom}
                />
            </Switch>
        </div>
    );
}

export default App;