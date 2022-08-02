import React, { Component } from "react";
import Header from "./HeaderComponent";
import TopComponent from "./TopComponent";
import BodyComponent from "./BodyComponent";
import AboutComponent from "./AboutComponent";
import MapComponent from "./MapComponent";
import { Container } from 'reactstrap';

class Main extends Component {
    render() {
        return(
            <div className="background">
                <Header />
                <TopComponent />
                <BodyComponent />
                <AboutComponent />
                <MapComponent />
            </div>

        );
    }
}

export default Main;