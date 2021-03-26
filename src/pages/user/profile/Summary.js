import React from 'react';
import {useSelector} from 'react-redux';
import { Affix, Card, Avatar, Collapse } from 'antd';
const { Meta } = Card;
const {Panel} = Collapse;

export default function Summary() {
    const state = useSelector(state => state)
    const {profile} = state.user;
    const text = (
        <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
        </p>
    );
      
    return (
        <Affix offsetTop={80} onChange={affixed => console.log(affixed)}>
            <Card className="rounded">
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={profile.username}
                description="description"
                />
                <hr />
                <Collapse accordion bordered={false} className="bg-transparent ">
                    <Panel header="Profil saya" key="1">
                        {text}
                    </Panel>
                    <Panel header="Pembelian" key="2">
                        {text}
                    </Panel>
                </Collapse>
            </Card>            
        </Affix>        
    )
}
