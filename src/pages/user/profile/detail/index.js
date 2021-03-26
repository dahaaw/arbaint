import React from 'react';
import {useSelector} from 'react-redux';
import Tab1 from './Tab1';
import Tab2 from './Tab2'; 
import { Tabs } from 'antd';
const { TabPane } = Tabs;


function callback(key) {
  
}

export default function Detail() {
    const state = useSelector(state => state)
    const {profile} = state.user
    return (
        <div className="mt-4">
            <h4 style={{alignContent:'center'}}>{profile.fullname}</h4>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Biodata" key="1">
                    <Tab1 />
                </TabPane>
                <TabPane tab="Daftar Alamat" key="2">
                    <Tab2 />
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    )
}