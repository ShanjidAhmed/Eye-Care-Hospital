import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceInfo.css'

const ServiceInfo = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetail, setSingleDetail] = useState({});

    useEffect(() => {
        fetch('../fakeData.json')
            .then((res) => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const foundDetails = details.find
            (service => service.id === parseInt(serviceId));
        setSingleDetail(foundDetails)
    }, [details])


    return (
        <div >
            <Card className="bg-dark text-white single-service container mt-1 mb-5">
                <Card.Img src={singleDetail?.serviceImage} className='img-fluid' alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-4 fs-2 fw-bold text-warning'> {singleDetail?.title}</Card.Title>
                    <Card.Text className='w-75 mx-auto mt-3'>
                        {singleDetail?.serviceDEscription}
                    </Card.Text>
                    <Card.Text className='text-center'>This service is available {singleDetail?.days} days/week </Card.Text>
                    <p className='text-center'>Helpline: {singleDetail?.phone} </p>
                    <p className='text-center '>Email : {singleDetail?.email}</p>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default ServiceInfo;