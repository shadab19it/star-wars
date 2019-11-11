import React, { Component } from "react";
import MainPage from "../pages/MainPage/MainPage";
import FilmPage from "../pages/FilmPage/FilmPage";
import Header from "../components/Header/Header";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/main" component={MainPage} />
                    <Route path="/film/:id" component={FilmPage} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default withRouter(Routes);
