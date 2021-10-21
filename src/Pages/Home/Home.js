import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useDepartments from '../../Hooks/useDepartments/useDepartments';
import useServices from '../../Hooks/useServices/useServices';
import DepartmentItem from '../Item/DepartmentItem';
import ServiceItem from '../Item/ServiceItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import { faBriefcaseMedical, faTint, faHeartbeat, faAmbulance, faNotesMedical, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const { services } = useServices();
    const { departments } = useDepartments();

    /* Icon */
    const briefcase = <FontAwesomeIcon icon={faBriefcaseMedical} />
    const blood = <FontAwesomeIcon icon={faTint} />
    const Ambulance = <FontAwesomeIcon icon={faAmbulance} />
    const NotesMedical = <FontAwesomeIcon icon={faNotesMedical} />
    const Heart = <FontAwesomeIcon icon={faHeartbeat} />
    const Stethoscope = <FontAwesomeIcon icon={faStethoscope} />
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
                                <h3 className="fw-bold">Best Medical Center</h3>
                                <p>"Medical Doctors perform health assessments and provide health and wellness advice to
                                    patients."</p>
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
                                <h3 className="fw-bold">Protect You & Your Family</h3>
                                <p>"Medical Doctors perform diagnostic tests, prescribe medication and advice for health."</p>
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
                                <h3 className="fw-bold">We Care For Your Health</h3>
                                <p>"Medical Doctors create treatment plans and provide health and wellness advice to
                                    patients."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="my-5 text-center">
                <h1 className="fw-bold">Our Available <span className="text-color">Services</span> </h1>
                <p>What Kind Ok The Service You Can Get From Us.</p>
            </div>
            <div className="container">
                <Row xs={1} md={3} className="g-5 mb-5 p-4">
                    {
                        services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                    }
                </Row>
            </div>
            <div className="my-5 text-center">
                <h1 className="fw-bold">Why <span className="text-color">Choose</span> Us?</h1>
                <p>We Always Provide Best Services</p>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 mx-auto">
                <div className="col text-lg-end align-item-center front-icon">
                    <span>{briefcase}</span>
                    <h3 className="mt-1">Professional Doctors</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium. nunc felis.</p>
                </div>
                <div className="col front-icon">
                    <span>{blood}</span>
                    <h3 className="mt-1">Exclusive Blood Bank</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium. nunc felis.</p>
                </div>
                <div className="col text-lg-end front-icon">
                    <span>{Ambulance}</span>
                    <h3 className="mt-1">Track your Progress</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium. nunc felis.</p>
                </div>
                <div className="col front-icon">
                    <span>{NotesMedical}</span>
                    <h3 className="mt-1">Emergency services</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium. nunc felis.</p>
                </div>
                <div className="col text-lg-end front-icon">
                    <span>{Heart}</span>
                    <h3 className="mt-1">Over 20 years of experience</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium. nunc felis.</p>
                </div>
                <div className="col front-icon">
                    <span>{Stethoscope}</span>
                    <h3 className="mt-1">We have experienced Doctor's.</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium. nunc felis.</p>
                </div>
            </div>
            <div className="my-5 text-center">
                <h1 className="fw-bold">Our <span className="text-color">Departments</span></h1>
                <p>High Quality Medicines at Lowest Rates</p>
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