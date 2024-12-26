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
                        <p className="card-text">
                            <div className="catalogPicturesSide">
                                <img className='pictureSide' src={music} alt="" />
                            </div>
                            <p>Music</p>
                        </p>
                    </div>
                    <div className="card middleCatalog" onClick={handleProjects}>
                        <p className="card-text">
                            <div className="catalogPicturesMiddle">
                                <img className='pictureMiddle' src={project} alt="" />
                            </div>
                            
                            Projects
                        </p>
                    </div>
                    <div className="card sideCatalog" onClick={handlePhotography}>
                        <p className="card-text">
                            <div className="catalogPicturesSide">
                                <img className='pictureSide' src={photography} alt="" />
                            </div>                           
                            <p>Photography</p>
                        </p>
                    </div>

                </div>
            </div>
        
        </div>
    );
}
 
export default HomePage;