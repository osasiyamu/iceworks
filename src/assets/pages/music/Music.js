import { useNavigate } from 'react-router-dom';
import '../../styles/music/music.css';

const Music = () => {
    const navigate = useNavigate();
    return ( 
        <div className="music">
            <button className='back' onClick={() => navigate('/')}>Back</button>
            <p>To be Developed</p>
        </div> 
    );
}
 
export default Music;