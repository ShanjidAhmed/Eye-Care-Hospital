import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about container mx-auto my-5' >

            <div className='row justify-content-center'>
                <div className="about-image  col-sm-12 col-md-10 col-lg-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqqz3DzPh9YAAM3p-e2xv-rPMrFHRAJrUiQ&usqp=CAU" alt="" />
                </div>
                <div className="about-accordian col-sm-12 col-md-10 col-lg-6">
                    <h3 className='text-center mt-md-5' >Eye Care Hospital</h3>
                    <p className='my-4'>Eye Care Hospital has provided comprehensive ophthalmology care for patients since 1832. Our skilled physicians and staff are dedicated to improving and preserving sight locally, regionally, and globally, and treat more than 350,000 patients a year. Eye Care has ranked consistently among the best ophthalmology hospitals in the U.S. Our team comprises some of the world's top eye doctors and has more top eye surgeons than any hospital in the United States. </p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='fw-bold'>Why Eye Care Hospital?</span></Accordion.Header>
                            <Accordion.Body>
                               Firmly established by a deeply rooted history and strong leadership, Eye Care is focused on providing world-class eye care to patients around the globe, driven by the need to protect sight and further our ever-growing efforts to advance eye research. Wills Eye has long been recognized for numerous achievements in ophthalmology. We are honored to have been named at the top of U.S. News & World Report's "Best Hospitals" every year since the survey began and annually recognized in Philadelphia magazine's "Top Doctors."
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className='fw-bold'>WHAT WE OFFER?</span></Accordion.Header>
                            <Accordion.Body>
                                At Wills, we have a unique spirit. Although other eye hospitals may settle for good enough, and although others may rest on their accomplishments, we forge ahead. When the challenges of the world make it easier to stop, we have an answer: NEVER.
                                Wills Eye is committed to protecting and preserving your vision. Our skilled and dedicated doctors provide ophthalmic medical services in all subspecialties with the needs of the patient as our top priority. Learn more about our world-renowned team, the wide range of medical eye services we offer, and the eye diseases and conditions we treat. Contact us if you have any questions or information regarding our services.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='fw-bold'>OUR SERVICES</span></Accordion.Header>
                            <Accordion.Body>
                                As the leading eye hospital in Philadelphia and around the globe, Wills Eye offers an extensive range of medical eye services - from primary eye care to the diagnosis and treatment of complex eye diseases in all ophthalmic subspecialties. Our world-renowned team of surgeons, specialists, and doctors stand ready to provide patients with the highest quality care, no matter your condition. Learn more about our leading doctors and find further information below about the types of comprehensive eye care in all subspecialties that we provide. From common eye problems to rare sight-threatening diseases, Wills Eye provides general eye care and comprehensive ophthalmic specialty services that attract patients throug​hout the Philadelphia metropolitan area, across the country, and around the world.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>

    );
};

export default About;