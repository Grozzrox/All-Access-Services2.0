import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Button, Container, Row, Col, Collapse, Card, CardBody} from 'reactstrap';
import map from './../All-Access-Services-logos/filled_map.png';


class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false }
    };

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    
    render() {
        return(
            <Container className='map-container'>
                <Row>
                    <Col className="col-sm-6">
                        <img src={map} id="coverage-map" alt="virginia-county-map" />
                    </Col>
                    <Col className="col">
    
                        <div>
                        <Button
                            size="lg"
                            onClick={this.toggle}
                            style={{marginBottom: '1rem'}}
                        >
                            Coverage areas
                        </Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card className='county-card'>
                                <CardBody>
                                    <h5>Counties:</h5>
                                    <br></br>
                                    Albemarle, Amelia, Augusta, Buckingham, Caroline, Charles City, Chesapeake, 
                                    Chesterfield, Cumberland, Dinwiddie, Essex, Fluvanna, Gloucester, Goochland, Greensville, Hampton,
                                    Hanover, Henrico, Isle of Wight, James City, King George, King William, King and Queen, Lancaster,
                                    Louisa, Mathews, Middlesex, Nelson, New Kent, Newport News, Norfolk, Northumberland, Nottoway, 
                                    Orange, Poquoson, Portsmouth, Powhatan, Prince Edward, Prince George, Rappahannock, Richmond City, 
                                    Southampton, Spotsylvania, Surry, Sussex, Virginia Beach, Westmoreland, York
                                </CardBody>
                            </Card>
                        </Collapse>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        );
    }

}

export default MapComponent;