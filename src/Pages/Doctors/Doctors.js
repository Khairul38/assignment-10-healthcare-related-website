import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../Hooks/useDoctors/useDoctors';
import DoctorsItem from '../Item/DoctorsItem';

const Doctors = () => {
    const [doctors] = useDoctors()
    return (
        <div>
            <div className="container">
                <div className="mt-5 text-center">
                    <h1><span className="text-color fw-bold">Meet Our Qualified</span> Doctors</h1>
                    <p>Who Is Behind The Best Medical Service In Our Clinic?</p>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            doctors.map(doctor => <DoctorsItem key={doctor.id} doctor={doctor}></DoctorsItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Doctors;