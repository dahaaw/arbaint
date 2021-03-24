import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Summary from './Summary';

export default function profile() {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <Summary />
                </Col>
                <Col>
                    <p>Profileee</p>

                </Col>
            </Row>
        </Container>        
    )
}
