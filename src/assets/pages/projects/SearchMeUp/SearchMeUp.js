import { useState } from 'react';
// import '../../../styles/projects/SearchMeUp/searchmeup.css';
import '../../../styles/projects/projectsummary.css';
import homepage from '../../../images/projects/SearchMeUp/homepage.png';
import signup from '../../../images/projects/SearchMeUp/signup.png';
import databaaseconnection from '../../../images/projects/SearchMeUp/dbconnection.png';
import signin from '../../../images/projects/SearchMeUp/signin.png';
import search1 from '../../../images/projects/SearchMeUp/search1.png';
import search2 from '../../../images/projects/SearchMeUp/search2.png';
import test from '../../../images/projects/SearchMeUp/test.png';
import sampleimg from '../../../images/music_stale.png';
import { useNavigate } from 'react-router';

const SearchMeUp = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(1);

    const handleNext = () => {
        if (currentTab < 7) setCurrentTab(currentTab + 1);
    };

    const handlePrevious = () => {
        if (currentTab > 1) setCurrentTab(currentTab - 1);
    };

    return ( 
        <div>
            <div className='projectBack' onClick={() => navigate('/projects')}><i className="bi bi-arrow-left-square-fill" id='back summarymary'></i></div>

            <div className='searchmeup'>

                <h5 className='searchmeupTitle'>SearchMeUp</h5>
                
                <nav aria-label="Page navigation">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className={`page-item ${currentTab === 1 ? 'disabled' : ''}`}>
                            <button className="page-link summary" onClick={handlePrevious}>Previous</button>
                        </li>
                        {[1, 2, 3, 4, 5, 6, 7].map((tab) => (
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

                    <div className="tab-content searchmeup">
                        {/* Tab 1 */}
                        <div className={`tab-pane fade ${currentTab === 1 ? 'show active' : ''}`} id="tab-pane1" role="tabpanel" aria-labelledby="tab1">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={homepage} className="img-fluid" alt="Homepage" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Homepage</h5>
                                            <p className="card-text">Welcome to the homepage of Search Me Up. This page is designed to introduce users to the website with a warm and simple interface.
                                            <br /><br />Note: This website used a database that has been terminated, hence functionality is limited. I will be going through a general overview and my contributions in the following slides.</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 2 */}
                        <div className={`tab-pane fade ${currentTab === 2 ? 'show active' : ''}`} id="tab-pane2" role="tabpanel" aria-labelledby="tab2">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={signup} className="img-fluid" alt="Signup" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Signup</h5>
                                            <p className="card-text">From the navigation bar, users can either sign up or sign in to our website. My role in this section was setting up the database connections. AWS was used here</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 3 */}
                        <div className={`tab-pane fade ${currentTab === 3 ? 'show active' : ''}`} id="tab-pane3" role="tabpanel" aria-labelledby="tab3">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={databaaseconnection} className="img-fluid" alt="Signin" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Database Connection</h5>
                                            <p className="card-text">Setting up the AWS RDS for the project and ensuring that the connection to the instance was successful was my role.</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 4 */}
                        <div className={`tab-pane fade ${currentTab === 4 ? 'show active' : ''}`} id="tab-pane3" role="tabpanel" aria-labelledby="tab3">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={signin} className="img-fluid" alt="Signin" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Signin</h5>
                                            <p className="card-text">If users are already in the database, they can succesfully sign into the website. 
                                            If they are not, there are messages displayed for them to sign up</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 5 */}
                        <div className={`tab-pane fade ${currentTab === 5 ? 'show active' : ''}`} id="tab-pane4" role="tabpanel" aria-labelledby="tab4">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={search1} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Search</h5>
                                            <p className="card-text">On successful sign in and filtered by people or organization, a user can search for other user.</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 6 */}
                        <div className={`tab-pane fade ${currentTab === 6 ? 'show active' : ''}`} id="tab-pane5" role="tabpanel" aria-labelledby="tab5">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={search2} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Automatic Filter Search</h5>
                                            <p className="card-text">On keyboard action, the search bar is developed to filter by the current value.</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab 7 */}
                        <div className={`tab-pane fade ${currentTab === 7 ? 'show active' : ''}`} id="tab-pane5" role="tabpanel" aria-labelledby="tab5">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={test} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Test using Selenium</h5>
                                            <p className="card-text">Selenium was used to test the browsers functionalities. The databse connection was tested and actions like sign up and sign in were tested. 
                                            <br /><br />Due to time constraint, those were the only aspect of the application that were tested. </p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tab 8 */}
                        <div className={`tab-pane fade ${currentTab === 8 ? 'show active' : ''}`} id="tab-pane6" role="tabpanel" aria-labelledby="tab6">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-lg-8 summary">
                                        <img src={sampleimg} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-lg-4 summary">
                                        <div className="card-body summary text">
                                            <h5 className="title summary">Sample Image</h5>
                                            <p className="card-text">This section contains sample content related to the sample image.</p>
                                            <p className="card-text"><small className="lastupdated">Last updated 2025-01-02</small></p>
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

export default SearchMeUp;
