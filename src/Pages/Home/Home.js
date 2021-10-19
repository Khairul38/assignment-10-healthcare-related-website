import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useDepartments from '../../Hooks/useDepartments/useDepartments';
import useServices from '../../Hooks/useServices/useServices';
import DepartmentItem from '../Item/DepartmentItem';
import ServiceItem from '../Item/ServiceItem';
import './Home.css';

const Home = () => {
    const [services] = useServices();
    const [departments] = useDepartments();
    return (
        <div className="container">
            <div className="my-5">
                <Carousel variant="dark">
                    <Carousel.Item interval={3000}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://demo.themeies.com/html/prolexe/assets/img/banner/1.jpg"
                                alt="First slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Best Medical Center</h3>
                                <p>"Medical Doctors perform health assessments, run diagnostic tests, prescribe medication, create treatment plans and provide health and wellness advice to
                                patients. Medical Doctors can specialize in specific."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://templates.hibootstrap.com/grin/default/assets/images/main-slides/slides-bg1.jpg"
                                alt="Second slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Protect You & Your Family</h3>
                                <p>"Medical Doctors perform health assessments, run diagnostic tests, prescribe medication, create treatment plans and provide health and wellness advice to
                                patients. Medical Doctors can specialize in specific."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://demo.themeies.com/html/prolexe/assets/img/banner/2.jpg"
                                alt="Third slide"
                            />
                            <div className=" text-center p-5">
                                <h3>We Care For Your Health</h3>
                                <p>"Medical Doctors perform health assessments, run diagnostic tests, prescribe medication, create treatment plans and provide health and wellness advice to
                                patients. Medical Doctors can specialize in specific."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="my-5 text-center">
                <h1 className="text-color">Our Available Services</h1>
                <p>What Kind Ok The Service You Can Grt From Us.</p>
            </div>
            <div className="container">
                <Row xs={1} md={3} className="g-5 mb-5 p-4">
                    {
                        services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                    }
                </Row>
            </div>
            <div className="my-5 text-center">
                <h1 className="text-color">Our Departments</h1>
                <p>Who Is Behind The Best Medical Service In Our Clinic?</p>
            </div>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-5 p-4">
                    {
                        departments.map(department => <DepartmentItem key={department.id} department={department}></DepartmentItem>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;