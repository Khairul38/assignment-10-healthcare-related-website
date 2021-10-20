import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';

const Services = () => {
    const {services} = useServices()
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1><span className="text-color fw-bold">Our Available</span> Services</h1>
                <p>What Kind Ok The Service You Can Grt From Us.</p>
            </div>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-5 p-4">
                    {
                        services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;