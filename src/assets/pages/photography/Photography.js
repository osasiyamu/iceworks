import { useNavigate } from 'react-router-dom';
import '../../styles/photography/photography.css';
const Photography = () => {
    const navigate = useNavigate();
    return ( 
        <div className="photography">
            <button className='back' onClick={() => navigate('/')}>Back</button>
            <p>To be Developed</p>
        </div>  
    );
}
 
export default Photography;