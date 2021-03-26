import React, {useState} from 'react';
import {Button, Card, Typography} from 'antd';
import {Row, Col} from 'react-bootstrap';
const { Paragraph } = Typography;

export default function Tab1() {
    const [fullname, setFullName] = useState('Hamdan Awaludin');
    const [birtdate, setBirthdate] = useState('04 Oktober 1994');
    const [gender, setGender] = useState('Ikhwan');
    const [email, setEmail] = useState('dahaaw@gmail.com');
    const [phone, setPhone] = useState('085210566071');
    return (
        <Row >
            <Col lg="4">
                <Card className="p-2"
                    cover={<img alt="example" src="https://id-test-11.slatic.net/p/88c62810184ec2d7b2853da4fb759306.jpg" />}
                >
                    <Button className="mb-3" style={{width:'100%'}}>pilih foto</Button>
                    <small className="text-muted">description="Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG"</small>
                </Card>
                <Button className="mt-2 rounded" style={{width:'100%'}}>ubah sandi</Button>
                <Button className="mt-2 rounded" style={{width:'100%'}}>ubah pin</Button>
            </Col>

            <Col>
                <b>Ubah Biodata</b>
                <Row className="mt-3 mb-3">
                    <Col md={4}>
                        <p>Nama Lengkap</p>
                    </Col>
                    <Col md={8}>
                        <Paragraph editable={{ onChange: setFullName }}>{fullname}</Paragraph>
                    </Col>

                    <Col md={4}>
                        <p>Tanggal Lahir</p>
                    </Col>
                    <Col md={8}>
                        <p>{birtdate}</p>
                    </Col>

                    <Col md={4}>
                        <p>Jenis Kelamin</p>
                    </Col>
                    <Col md={8}>
                        <p>{gender} </p>
                    </Col>
                </Row>

                <b>Ubah Kontak</b>
                <Row className="mt-3 mb-3">
                    <Col md={4}>
                        <p>Email</p>
                    </Col>
                    <Col md={8}>
                        <Paragraph editable={{ onChange: setEmail }}>{email}</Paragraph>
                    </Col>

                    <Col md={4}>
                        <p>No HP</p>
                    </Col>
                    <Col md={8}>
                        <Paragraph editable={{ onChange: setPhone }}>{phone}</Paragraph>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    )
}
