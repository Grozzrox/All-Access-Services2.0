import React from "react";
import { Container, Button } from "reactstrap";

const TopComponent = () => {

    return(
        <div className="top-background-div row align-items-center">
            <div className="header-text">
                <h1>Life is fast, recover faster</h1>
                <h5>It's time to get in the driver's seat</h5>
                <Button
                    color="danger" size="lg"
                    outline
                >
                    Book Appointment
                </Button>
                
            </div>
        </div>
    );
}

export default TopComponent;