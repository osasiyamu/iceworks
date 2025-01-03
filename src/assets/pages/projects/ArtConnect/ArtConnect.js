import { useState } from 'react';
import '../../../styles/projects/projectsummary.css';
import homepage from '../../../images/projects/ArtConnect/Home.png';
import discover from '../../../images/projects/ArtConnect/Discover.png';
import discoverFilter from '../../../images/projects/ArtConnect/DiscoverFilter.png';
import language from '../../../images/projects/ArtConnect/Language.png';
import languageChange from '../../../images/projects/ArtConnect/LanguageChange.png';
import languageChangeFilter from '../../../images/projects/ArtConnect/LanguageChangeFilter.png';
import cart from '../../../images/projects/ArtConnect/Cart.png';
import { useNavigate } from 'react-router';

const ArtConnect = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(1);

    const handleNext = () => {
        if (currentTab < 7) setCurrentTab(currentTab + 1);
    };

    const handlePrevious = () => {
        if (currentTab > 1) setCurrentTab(currentTab - 1);
    };

    return ( 
        <div className=''>
            <div className='projectBack' onClick={() => navigate('/projects')}>
                <i className="bi bi-arrow-left-square-fill"></i>
            </div>

            <div className='artconnect'>
                
                <h5 className='artconnectTitle'>ArtConnect</h5>

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

                    <div className="tab-content artconnect">
                        {/* Tab 1 */}
                        <div className={`tab-pane fade ${currentTab === 1 ? 'show active' : ''} summary`} id="tab-pane1" role="tabpanel" aria-labelledby="tab1">
                            <div className="card mb-3 summary">
                                <div className="row g-0 summary">
                                    <div className="col-md-8 summary">
                                        <img src={homepage} className="img-fluid" alt="Homepage" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Homepage</h5>
                                            <p className="card-text">Welcome to the homepage of ArtConnect developed using an inviting and minimalistic user interface.
                                            <br /><br />Note: This website is desgined to test knowledge on user centered interface,hence no functionality is attached. 
                                            <br /><br />To interact with the website, click the link beside the project name in the 'Projects' page</p>
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
                                        <img src={discover} className="img-fluid" alt="discover" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Discover</h5>
                                            <p className="card-text">On clicking the discover navmenu, you'll brought to this page where you can see all the a user can discover old and new arts of their interest</p>
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
                                        <img src={discoverFilter} className="img-fluid" alt="discoverFilter" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Filter</h5>
                                            <p className="card-text">A user can also filter the type of art they want to see on their page. Filter found on the top right corner of the page</p>
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
                                        <img src={language} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Universality</h5>
                                            <p className="card-text">Notice the wold icon at the bottom right? This page is created to be internationaly understood with the madarin and french options. 
                                            <br /><br />Side Note: Only the French option works</p>
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
                                        <img src={languageChange} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Universality - French</h5>
                                            <p className="card-text">The workings of the french page are displayed here. Notice the texts in the buttons. Now, try clicking the filter button.</p>
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
                                        <img src={languageChangeFilter} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Universality - French</h5>
                                            <p className="card-text">On filter click, you can also notice the language change with the filters.</p>
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
                                        <img src={cart} className="img-fluid" alt="Sample" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body summary">
                                            <h5 className="title">Cart</h5>
                                            <p className="card-text">If you explore more and try to add an item to cart, you will be brought to this page (I mean if you simply click cart on the nav bar, you'll can get here too).
                                            <br /><br />I just added this part because the page is beautifully designed. <br /><br />Feel free to explore more!</p>
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

export default ArtConnect;
