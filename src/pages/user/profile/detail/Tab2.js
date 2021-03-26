import React from 'react';
import { Button, Select, Input, Form, Table } from 'antd';
import {Row, Col} from 'react-bootstrap';
import {SearchOutlined} from '@ant-design/icons'
const {Option} = Select;

export default function Tab2() {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const columns = [
        {
          title: 'Penerima',
          dataIndex: 'receiver',
        },
        {
          title: 'Alamat Pengiriman',
          dataIndex: 'address',
        },
        {
          title: 'Daerah pengiriman',
          dataIndex: 'area',
        },
        {
            title: 'Edit/Hapus',
            dataIndex: 'action',
          },
      ];
      const data = [
        {
          key: '1',
          receiver: 'John Brown \n0832842398423',
          address: 'Rumah \nNew York No. 1 Lake Park',
          area: `Cimanggis, Depok,\nJawa Barat, Indonesia \n16951`,
        },
        {
          key: '2',
          receiver: 'Jim Green \n08284923829832',
          address: 'Mertua \nLondon No. 1 Lake Park',
          area: `Cimanggis, Depok,\nJawa Barat, Indonesia \n16951`,
        },
        {
          key: '3',
          receiver: 'Joe Black \n083298823742389',
          address: 'Kontrakan \nSidney No. 1 Lake Park',
          area: `Cimanggis, Depok,\nJawa Barat, Indonesia \n16951`,
        },
      ];
    return (
        <>
        <Row>
            <Col md={3}>
                <Button type="primary" className="rounded">Tambah Alamat</Button>
            </Col>
            <Col>
                <Form>
                    <Form.Item label="urutkan">
                        <Select className="rounded" defaultValue="lucy" style={{ width: '40%', display:'inline-block' }} onChange={handleChange}>
                            <Option value="jack">Terbaru</Option>
                            <Option value="Yiminghe">Penerima</Option>
                            <Option value="lucy">Nama Alamat</Option>
                        </Select>
                        <Input style={{ width: '57%', display:'inline-block', marginLeft:"3%"}} addonAfter={<SearchOutlined />} defaultValue="mysite" />
                    </Form.Item>
                </Form>
            </Col>
        </Row>

        <Table style={{ whiteSpace: 'pre'}} columns={columns} dataSource={data} size="small" />
        </>
    )
}
