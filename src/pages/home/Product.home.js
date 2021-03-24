import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function ProductHome() {
    return (
        <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" src="https://id-test-11.slatic.net/p/88c62810184ec2d7b2853da4fb759306.jpg" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <div className="additional">
                <p className="price">Price: 20$</p>
                <p>Author: John Doe</p>
            </div>
        </Card>
    )
}
