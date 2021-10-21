import React from 'react';
import { Row } from 'react-bootstrap';
import useDepartments from '../../Hooks/useDepartments/useDepartments';
import DepartmentItem from '../Item/DepartmentItem';

const Departments = () => {
    const { departments } = useDepartments();
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1><span className="text-color fw-bold">Our</span> Departments</h1>
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

export default Departments;