import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, serviceDEscription, image } = service;

    return (

        <div className='service  col-lg-4 col-md-6 col-sm-12 '>

            <div className="service-logo">
                <img src={image} alt="" />
            </div>
            <div className="service-description">
                <h5 className='mb-3 fw-bold text-right'>{title}</h5>
                <p>{serviceDEscription}</p>
                <Link to={`/serviceInfo/${id}`}><button className='btn btn-outline-info'>Read More</button></Link>
            </div>
        </div>

    );
};

export default Service;