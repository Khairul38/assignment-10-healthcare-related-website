import React from 'react';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="d-lg-flex align-items-center my-5">
                <div className="m-5">
                    <h1 className=" fw-bold"><span className="text-color">A Warm</span> Welcome To Our Hospital. Bringing The Future
                        of Healthcare</h1>
                </div>
                <img className="img-fluid" src="https://templates.hibootstrap.com/grin/default/assets/images/about/about-1.png" alt="" />
            </div>
            <div className="text-center my-5">
                <h1 className="fw-bold">Our <span className="text-color">Facilities</span></h1>
                <p>What Other Sais About Clinic.</p>
            </div>
            <div className="container my-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src="https://demo.themeies.com/menova/assets/img/about/1.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item rounded">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Outpatient Rehabilitation</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Patient are Our Priority, We Offer Quality Medical Services of Specialists.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>Gynecological Clinic</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Patient are Our Priority, We Offer Quality Medical Services of Specialists.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <strong>Outdoor
                                            Services</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Patient are Our Priority, We Offer Quality Medical Services of Specialists.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        <strong>Feel like Home
                                            Services</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Patient are Our Priority, We Offer Quality Medical Services of Specialists.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        <strong>Pathology
                                            Services</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Patient are Our Priority, We Offer Quality Medical Services of Specialists.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border-top rounded">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapseSix">
                                        <strong>Personal Care
                                            System</strong>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Patient are Our Priority, We Offer Quality Medical Services of Specialists.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-lg-flex align-items-center my-5">
                <img className="img-fluid" src="https://disin-react.hibootstrap.com/images/about1.jpg" alt="" />
                <div className="m-5">
                    <h1 className=" fw-bold"><span className="text-color">About</span> Our Hospital</h1>
                    <br />
                    <h5>Our Patient are Our Priority, We Offer Quality Medical Services of Specialists. More details about our services below.</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;