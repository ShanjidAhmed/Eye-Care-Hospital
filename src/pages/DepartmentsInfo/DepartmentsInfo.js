import React from 'react';
import './DepartmentsInfo.css'

const DepartmentsInfo = ({ department }) => {
    const { name, image, info, head, appointment, find, description } = department;
    return (
        <div className='row container top mx-auto mb-5'>
            <div className="department-image col-lg-5 col-sm-11 col-md-8 ">
                <img src={image} alt="" />
            </div>
            <div className='department-info col-lg-5 col-sm-11 col-md-8 p-4 ms-3'>
                <h2 className='text-primary fw-bold'>{name}</h2>
                <p className='my-5 text-secondary '>{description}</p>
                <div className='information'>
                    <h6>{head}</h6>
                    <p>Head Department</p>
                </div>
                <div className='information'>
                    <h6>DEPARTMENT INFO</h6>
                    <p>{info} </p>
                </div>
                <div className='information'>
                    <h6>FIND A DOCTOR</h6>
                    <p>{find} </p>
                </div>
                <div className='information'>
                    <h6>REQUEST AN APPOINTMENT</h6>
                    <p>{appointment} </p>
                </div>
            </div>
        </div>
    );
};

export default DepartmentsInfo;