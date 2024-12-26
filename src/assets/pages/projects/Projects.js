import { useNavigate } from 'react-router-dom';
import '../../styles/projects/projects.css';
import pic from '../../images/photography1.jpg';
const Projects = () => {
    const navigate = useNavigate();
    return ( 
        <div className="projects" id='projects'>
            <p className='projectTitle'>Projects</p>
            <hr style={{'color': 'white', 'margin': '-1% 5% 3% 5%'}} />
            <div className='goBack' onClick={() => navigate('/')}><i class="bi bi-arrow-left-square-fill"></i></div>
            <div title="Back to the top"><a href="#projects"><i class="bi bi-arrow-up-square-fill"></i></a></div>
            <div className="projectList">

                {/* <div className="row g-0">
                    <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p className="card-text">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div> */}

                <div className="project">
                    <a href="https://osasiyamu.github.io/artconnect/" target="">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={pic} className="img-fluid project picture" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">ArtConnect</h5>
                                    <p className="description">
                                        An interactive social platform designed to foster creativity and artistic collaboration, 
                                        allowing users to showcase their artwork, find inspiration, and connect with other artists. ArtConnect promotes a supportive creative community with features for posting art, 
                                        discovering trending works, and engaging with peers through comments and feedback.
                                    </p>
                                    <p className=""><small className="">June 2024 – July 2024</small></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project odd">
                    <a href="https://osasiyamu.github.io/IceCuts/" target="">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">IceCuts</h5>
                                    <p className="description">
                                        A salon booking application created to simplify the process of scheduling and managing haircut appointments. Users can browse available time slots, select preferred stylists, 
                                        and receive reminders for upcoming appointments, making it easy and convenient to secure a spot without the typical wait.
                                    </p>
                                    <p className=""><small className="">May 2024 – June 2024</small></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <img src={pic} className="img-fluid project picture" alt="..."></img>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project">
                    <a href="/iceworks/#/searchmeup">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={pic} className="img-fluid project picture" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">SearchMeUp</h5>
                                    <p className="description">
                                        A customizable portfolio builder that enables users to create personalized digital portfolios to showcase their skills, projects, and achievements. Designed with a user-friendly interface, 
                                        the app supports multiple design options and templates, allowing users to highlight their unique personal or professional brand.
                                    </p>
                                    <p className=""><small className="">September 2023 – May 2024</small></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project odd">
                    <a href="/iceworks/#/surveymonkey">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Survey-Monkey Clone</h5>
                                    <p className="description">
                                        A survey creation tool modeled after SurveyMonkey, offering features to design, distribute, and analyze surveys. It includes options for question customization, real-time response tracking, 
                                        and basic analytics, providing users with an accessible way to gather and interpret feedback.
                                    </p>
                                    <p className=""><small className="">September 2023 – December 2023</small></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <img src={pic} className="img-fluid project picture" alt="..."></img>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            
        </div> 
    );
}
 
export default Projects;