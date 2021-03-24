import React from 'react'
import { Affix, Card, Avatar, Collapse } from 'antd';
const { Meta } = Card;
const {Panel} = Collapse;

export default function Summary() {
    const text = (
        <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
        </p>
    );
      
    return (
        <Affix offsetTop={80} onChange={affixed => console.log(affixed)}>
            <Card>
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Hamdan Awaludin"
                description="description"
                />
                <hr />
                <Collapse accordion bordered={false} className="bg-transparent ">
                    <Panel header="Pembelian" key="1">
                        {text}
                    </Panel>
                    <Panel header="Profil saya" key="2">
                        {text}
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        {text}
                    </Panel>
                </Collapse>
            </Card>            
        </Affix>        
    )
}
