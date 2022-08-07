import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button, Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faClock ,faTruck, faLocationPinLock } from '@fortawesome/free-solid-svg-icons'


const BottomComponent = () => {

  
    const car = <FontAwesomeIcon icon={faCar} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const lock = <FontAwesomeIcon icon={faLocationPinLock} />

    return(
        <div className="bottom-background-div">
            <Container className='bottom-container'>
                <Row>
                    <Col>
                        <div id="truck-div">
                        {car}
                        <h4>Vehicle repossession</h4>
                        <p>We offer the largest vehicle repossesion radius in the state.</p>
                        </div>
                    </Col>
                    <Col>
                        <div id="car-div">
                        {clock}
                        <h4>24-hour access</h4>
                        <p>Call us any time, day or night, to schedule a vehicle recovery.</p>
                        </div>
                    </Col>
                    <Col>
                        <div id="clock-div">
                        {lock}
                        <h4>Secure facility</h4>
                        <p>Our impound facility is located in a secure, nondescript location.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default BottomComponent;