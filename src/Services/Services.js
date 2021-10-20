import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className=' mx-2  my-5' id='services'>
            <h2 className='my-3  text-center'>Our Services</h2>
            <p className='mb-5 px-3 text-center'>We are committed to provide affordable services, without any compromise on the quality of service – so that you are able to remain happy.</p>
            <div className='container services row justify-content-center'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
