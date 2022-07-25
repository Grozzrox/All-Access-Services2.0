import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button, Container } from 'reactstrap';

const BodyComponent = () => {

    return(
        <div className="rva-background-div row align-items-center">
            <div className='button-div'>
            <Button
                color="danger" size="lg"
            >
                Book Appointment
            </Button>
            </div>

        </div>
    )
}

export default BodyComponent;