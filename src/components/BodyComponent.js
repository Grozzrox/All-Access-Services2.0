import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button, Container, Row, Column} from 'reactstrap';

const BodyComponent = () => {

    return(
        <Container className='rva-parent-div big-container'>
            <Row className="rva-background-div row align-items-center">
            <div className="button-div col">
                <Button
                    className="btn" size="lg"
                >
                    Learn More
                </Button>
                </div>
            </Row>
        </Container>

    )
}

export default BodyComponent;