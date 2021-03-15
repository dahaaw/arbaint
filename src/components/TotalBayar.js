import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import {Col, Button} from 'react-bootstrap';
import {numberWithCommas} from '../utils/utils';

class TotalBayar extends Component {
    render() {
        const totalBayar = this.props.carts.reduce(function (result, item){
            return result  + item.total_harga
        },0)
        console.log(totalBayar)
        // const {carts} = this.props
        return (
            <div className="fixed-bottom">
                <Col md={{span:3, offset:9}} className="px-4">
                    <h4>Total Harga : <strong className="float-right mr-2">{numberWithCommas(totalBayar)}</strong></h4>
                    <Button variant="primary my-3" block size="lg">
                        <FontAwesomeIcon icon={faShoppingCart}/><strong>   BAYAR</strong>
                    </Button>
                </Col>
            </div>
        );
    }
}

export default TotalBayar;
