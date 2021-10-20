import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DoctorsItem = (props) => {
    const { img, name, detail } = props.doctor;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>
                            <p>{detail}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DoctorsItem;