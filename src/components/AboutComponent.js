import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button, Container, Row, Col} from 'reactstrap';
import repoMan from './../All-Access-Services-logos/repo-man.jpg';
import clocktower from './../All-Access-Services-logos/richmond-clocktower.jpg';
import towTruck from './../All-Access-Services-logos/roadside-tow.jpg';

const AboutComponent = () => {

    return(
        <Container className='about-container'>
            <Row>
                <Col className="col-md-6 mission-statement">
                <h2>Ready to meet your repossession needs</h2>
                <p>All Access Services is Virginia's premier vehicle repossession and recovery company. We have over
                    10 years of service recovering vehicles for the nation's top lenders. Located in the heart of Virginia,
                    Richmond, we are strategically located to repossess vehicles all across the state. 
                </p>
                <Button
                        className="btn" size="lg"
                    >
                        Coverage Areas
                    </Button>
                </Col>
                <Col className="col-md">
                <img src={repoMan} id="repoman" alt="repo-man" />
                </Col>
                <Col className='col-md-12'>
                    <h2 id="va-h2">Proudly serving Virginia for over 10 years</h2>
                </Col>
                <Col className='col-md-6'>
                <img src={clocktower} id="clocktower" alt="clocktower" />
                <h4 id="clock-h4">Located in Richmond, VA</h4>
                <p id="clock-p">Our main impound facility is conveniently located in the heart of Virginia. This allows us 
                to quickly locate vehicles out for repossession throughout the state. </p>
                </Col>
                <Col className='col-md-6'>
                    <img src={towTruck} id="towtruck" alt="towtruck" />
                    <h4 id="tow-h4">24-hour services</h4>
                    <p id="tow-p">We're called All Access Services for a reason. Call us any time to schedule an appointment.</p>
                </Col>
                
            </Row>
        </Container>
    )
}

export default AboutComponent;