import React from 'react';
import {Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Success = () => {
    return (
        <div className="mt-4 text-center">
            <Image src="assets/images/success.png" width={500}/>
            <h2>Order Successed</h2>
            <p>Thanks for Order</p>
            <Button variant="primary" as={Link} to="/">
                back
            </Button>
        </div>
    );
}

export default Success;
