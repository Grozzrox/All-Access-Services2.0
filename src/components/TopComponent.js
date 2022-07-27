import React from "react";
import { Container, Button, Row } from "reactstrap";

const TopComponent = () => {

    return(
        <Container className='jumbotron-container big-container'>
            <Row className="top-background-div align-items-center">
            <div className="header-text">
                    <h1>Life is fast, recover faster</h1>
                    <h5>It's time to get back in the driver's seat</h5>
                    <Button
                        className="btn" size="lg"
                    >
                        Book Appointment
                    </Button>
                    
                </div>
            </Row>
        </Container>
        
    );
}

export default TopComponent;