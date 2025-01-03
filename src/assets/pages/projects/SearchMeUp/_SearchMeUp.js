import { useState } from 'react';
// import '../../../styles/projects/SearchMeUp/searchmeup.css';
import '../../../styles/projects/projectsummary.css';
import homepage from '../../../images/projects/SearchMeUp/homepage.png';
import signup from '../../../images/projects/SearchMeUp/signup.png';
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
            <div className='projectBack' onClick={() => navigate('/projects')}>
                <i className="bi bi-arrow-left-square-fill"></i>
            </div>

            <div>    
                <div className='searchmeup'>
                    
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
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-8 summary">
                                            <img src={homepage} className="img-fluid" alt="Homepage" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="title">Homepage</h5>
                                                <p className="card-text">This card contains details about the homepage interface.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
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
                                            <img src={signup} className="img-fluid" alt="Signup" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="title">Signup</h5>
                                                <p className="card-text">Details about the signup process are displayed here.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 5 mins ago</small></p>
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
                                            <img src={signin} className="img-fluid" alt="Signin" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="title">Signin</h5>
                                                <p className="card-text">This section contains information about the signin process.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
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
                                            <img src={search1} className="img-fluid" alt="Sample" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="title">Search</h5>
                                                <p className="card-text">This section contains sample content related to the sample image.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated just now</small></p>
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
                                            <img src={search2} className="img-fluid" alt="Sample" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="title">Search</h5>
                                                <p className="card-text">This section contains sample content related to the sample image.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated just now</small></p>
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
                                            <img src={test} className="img-fluid" alt="Sample" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="title">Test using Selenium</h5>
                                                <p className="card-text">This section contains sample content related to the sample image.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated just now</small></p>
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
                                            <div className="card-body">
                                                <h5 className="title">Sample Image</h5>
                                                <p className="card-text">This section contains sample content related to the sample image.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated just now</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </nav>
                </div> 
            </div>
        </div>
    );
}

export default SearchMeUp;
