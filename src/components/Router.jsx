import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.jsx";
import AdminPanel from "./AdminPanel.jsx";
import PageNotFound from "./PageNotFound.jsx";

export default class Router extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/admin" component={AdminPanel.jsx} />
                    <Route component={PageNotFound.jsx} />
                </Switch>
            </BrowserRouter>
        );
    }
}