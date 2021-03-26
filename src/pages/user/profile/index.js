import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Summary from './Summary';
import Detail from './detail';

export default function profile() {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Summary />
                </Col>
                <Col>
                    <Detail/>
                </Col>
            </Row>
        </Container>        
    )
}