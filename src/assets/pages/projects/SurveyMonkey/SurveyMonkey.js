import { useState } from 'react';
import '../../../styles/projects/SurveyMonkey/surveymonkey.css';
import sampleimg from '../../../images/music_stale.png';
import { useNavigate } from 'react-router';

const SurveyMonkey = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(1);

    const handleNext = () => {
        if (currentTab < 6) setCurrentTab(currentTab + 1);
    };

    const handlePrevious = () => {
        if (currentTab > 1) setCurrentTab(currentTab - 1);
    };

    return ( 
        <div className="surveymonkey">
            {/* <button className='back' onClick={() => navigate('/projects')}>Back</button> */}
            <div className='Back' onClick={() => navigate('/projects')}>
                <i className="bi bi-arrow-left-square-fill"></i>
            </div>
            <p>To be Developed</p>
        </div>  
    );
}
 
export default SurveyMonkey;