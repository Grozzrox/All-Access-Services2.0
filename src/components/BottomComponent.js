import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button, Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const BottomComponent = () => {

  
    const element = <FontAwesomeIcon icon={faCoffee} />

    return(
        <div className="bottom-background-div">
            <Container className='bottom-container'>
                <Row>
                    <Col>
                        <div id="truck-div">
                        {element}
                        </div>
                    </Col>
                    <Col>
                        <div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default BottomComponent;