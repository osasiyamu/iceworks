import { useNavigate } from 'react-router-dom';
import '../../styles/projects/projects.css';
const Projects = () => {
    const navigate = useNavigate();
    return ( 
        <div className="project">
            <button className='back' onClick={() => navigate('/')}>Back</button>
            <p>To be Developed</p>
        </div> 
    );
}
 
export default Projects;