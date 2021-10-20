import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const HomeDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')

            .then(res => res.json())
            .then(data => setDoctors(data.slice(8)));
    }, [])
    return (
        <div className='mt-5'>
            {
                doctors.map(doctors =>
                    <Doctor key={doctors.id} doctors={doctors}></Doctor>
                )
            }
        </div>
    );
};

export default HomeDoctor;
