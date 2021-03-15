import React, { Component } from 'react';
import {Row, Col, ListGroup, Badge} from 'react-bootstrap';
import {TotalBayar} from './'

class Hasil extends Component {
    render() {
        const {carts} = this.props;
        return (
            <Col md={3} mt={2}>
                <h4><strong>Return</strong></h4>
                <hr/>
                {carts.length !== 0 && 
                    <ListGroup variant="flush">
                        {carts.map((cart) => (
                            <ListGroup.Item key={cart.id}>
                                <Row>
                                <Col xs={2}>
                                    <h4>
                                        <Badge pill variant="success">
                                            {cart.jumlah}
                                        </Badge>
                                    </h4>
                                </Col>
                                <Col>
                                    <h5>{cart.product.nama}</h5>
                                    <p>Rp. {cart.product.harga}</p>
                                </Col>
                                <Col>
                                    <strong className="float-right">
                                        Rp. {cart.total_harga}
                                    </strong>
                                </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
                <TotalBayar carts={carts}/>
            </Col>
        );
    }
}

export default Hasil;
