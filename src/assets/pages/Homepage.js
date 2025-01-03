import '../styles/main.css';
import '../styles/home.css';
import photography from '../images/photography.webp';
// import photography1 from '../images/photography1.jpg'
import music from '../images/music.png';
import project from '../images/project.webp'
// import music1 from '../images/music_stale.png';
// import Navbar from './Navbar';

import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();
    
    const handleMusic = () => {
        navigate('/music');
    }
    const handleProjects = () => {
        navigate('/projects');
    }
    const handlePhotography = () => {
        navigate('/photography');
    }
    return (
        <div className="Home">
            <div className='catalog'>

                <div className="catalogStyling">
                    <div className="card sideCatalog" onClick={handleMusic}>
                        <div className="card-text">
                            <div className="catalogPicturesSide">
                                <img className='pictureSide' src={music} alt="" />
                            </div>
                            <p>Music</p>
                        </div>
                    </div>
                    <div className="card middleCatalog" onClick={handleProjects}>
                        <div className="card-text">
                            <div className="catalogPicturesMiddle">
                                <img className='pictureMiddle' src={project} alt="" />
                            </div>
                            
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="card sideCatalog" onClick={handlePhotography}>
                        <div className="card-text">
                            <div className="catalogPicturesSide">
                                <img className='pictureSide' src={photography} alt="" />
                            </div>                           
                            <p>Photography</p>
                        </div>
                    </div>

                </div>
            </div>
        
        </div>
    );
}
 
export default HomePage;