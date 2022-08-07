import React, { Component } from "react";
import Header from "./HeaderComponent";
import TopComponent from "./TopComponent";
import BodyComponent from "./BodyComponent";
import AboutComponent from "./AboutComponent";
import { Container } from 'reactstrap';
import MapComponent from "./MapComponent";
import BottomComponent from "./BottomComponent";
import ContactComponent from "./ContactComponent";

class Main extends Component {
    render() {
        return(
            <div className="background">
                <Header />
                <TopComponent />
                <BodyComponent />
                <AboutComponent />
                <MapComponent />
                <BodyComponent />
                <BottomComponent />
                <ContactComponent />
            </div>

        );
    }
}

export default Main;