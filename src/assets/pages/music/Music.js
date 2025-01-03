import { useNavigate } from 'react-router-dom';
import '../../styles/music/music.css';

const Music = () => {
    const navigate = useNavigate();
    return ( 
        <div className="music">
            {/* <button className='back' onClick={() => navigate('/')}>Back</button> */}
            <div className='Back' onClick={() => navigate('/')}>
                <i className="bi bi-arrow-left-square-fill"></i>
            </div>
            <p>To be Developed</p>
        </div> 
    );
}
 
export default Music;