import React from "react";
import Register from './Register';
import {Row} from 'react-bootstrap';

function Account(){
    return(
        <Row>
            {/* Register */}
            <Col xs={12} sm={12} lg={6}>
                <Register/>
            </Col>
        </Row>
    )
}

export default Account