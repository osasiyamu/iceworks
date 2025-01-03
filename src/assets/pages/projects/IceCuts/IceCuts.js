import { useState } from 'react';
import '../../../styles/projects/projectsummary.css';
import homepage from '../../../images/projects/IceCuts/IceCutsHomePage.png';
import teamSection from '../../../images/projects/IceCuts/TeamSection.png';
import testimonialSection from '../../../images/projects/IceCuts/TestimonialSection.png';
import stylesPrices from '../../../images/projects/IceCuts/StylesPrices.png';
import bookingSection from '../../../images/projects/IceCuts/BookingSection.png';
import bookingConfirmation from '../../../images/projects/IceCuts/BookingConfirmation.png';
// import test from '../../../images/projects/IceCuts/test.png';
import sampleimg from '../../../images/music_stale.png';
import { useNavigate } from 'react-router';

const IceCuts = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(1);

    const handleNext = () => {
        if (currentTab < 7) setCurrentTab(currentTab + 1);
    };

    const handlePrevious = () => {
        if (currentTab > 1) setCurrentTab(currentTab - 1);
    };

    return ( 
        <div className='testarrange'>
            <div className='projectBack' onClick={() => navigate('/projects')}>
                <i className="bi bi-arrow-left-square-fill"></i>
            </div>

            <div className='icecuts'>

                <h5 className='icecutsTitle'>IceCuts</h5>

                <nav aria-label="Page navigation">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className={`page-item ${currentTab === 1 ? 'disabled' : ''}`}>
                            <button className="page-link summary" onClick={handlePrevious}>Previous</button>
                        </li>
                        {[1, 2, 3, 4, 5, 6].map((tab) => (
                            <li className="page-item" key={tab}>
                                <button 
                                    className={`nav-link summary ${currentTab === tab ? 'active' : ''}`}
                                    onClick={() => setCurrentTab(tab)}
                                    type="button" 
                                    role="tab" 
                                    aria-selected={currentTab === tab}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentTab === 7 ? 'disabled' : ''}`}>
                            <button className="page-link summary" onClick={handleNext}>Next</button>
                        </li>
                    </ul>

                    <div className="tab-content icecuts">
                        {/* Tab 1 */}
                        <div className={`tab-pane fade ${currentTab === 1 ? 'show active' : ''}`} id="tab-pane1" role="tabpanel" aria-labelledby="tab1">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={homepage} className="img-fluid" alt="Homepage" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Homepage</h5>
                                            <p className="card-text">Welcome to IceCuts Homepage. A simple and elegant designed homepage to demonstrate my understanding of ucer centered design. <br />For a list of all the services, click the yellow button right there.
                                            <br /><br />Note: There are no functionalities attached to this project as its sole purpose was user center design.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 2 */}
                        <div className={`tab-pane fade ${currentTab === 2 ? 'show active' : ''}`} id="tab-pane2" role="tabpanel" aria-labelledby="tab2">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={teamSection} className="img-fluid" alt="teamSection" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">About Us</h5>
                                            <p className="card-text">On clicking the 'About Us' navigation up top, you are directed to a section on the page that introduces everyone on the team.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 3 */}
                        <div className={`tab-pane fade ${currentTab === 3 ? 'show active' : ''}`} id="tab-pane3" role="tabpanel" aria-labelledby="tab3">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={testimonialSection} className="img-fluid" alt="testimonialSection" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Testimonials</h5>
                                            <p className="card-text">This section targetted to be directly under the team introduction lets users see all the past reviews in order to make a decision on who to book an appointment under.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 4 */}
                        <div className={`tab-pane fade ${currentTab === 4 ? 'show active' : ''}`} id="tab-pane4" role="tabpanel" aria-labelledby="tab4">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={stylesPrices} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Style Descriptions and Pricing</h5>
                                            <p className="card-text">This section displays all the styles with their desciptions and their pricing. Remember the button on the homepage 'Click for our list of services'?
                                            <br />Yeah, clicking on that brings you here.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 5 */}
                        <div className={`tab-pane fade ${currentTab === 5 ? 'show active' : ''}`} id="tab-pane5" role="tabpanel" aria-labelledby="tab5">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={bookingSection} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Booking</h5>
                                            <p className="card-text">This section displays an interface for booking an appointment. A style guide is provided beside the form to help client see what they should expecting.
                                            <br /><br />For all the pricing and description of all the styles, click into the 'prices and description' beside the Style Guide.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 6 */}
                        <div className={`tab-pane fade ${currentTab === 6 ? 'show active' : ''}`} id="tab-pane5" role="tabpanel" aria-labelledby="tab5">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={bookingConfirmation} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Booking Confirmation</h5>
                                            <p className="card-text">This page is displayed after a successful book. Details of the bookings are shown.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tab 7 */}
                        <div className={`tab-pane fade ${currentTab === 7 ? 'show active' : ''}`} id="tab-pane6" role="tabpanel" aria-labelledby="tab6">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-8 summary">
                                        <img src={sampleimg} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Sample Image</h5>
                                            <p className="card-text">This section contains sample content related to the sample image.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </nav>
            </div> 
        </div>
    );
}

export default IceCuts;
