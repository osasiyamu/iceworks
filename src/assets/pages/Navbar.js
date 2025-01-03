// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from 'bootstrap';
import { useEffect, useRef } from "react";
const Navbar = () => {
    const navigate  = useNavigate();
    const mainContentRef = useRef(null);
    useEffect(() => {
        const canvas = document.getElementById('offcanvasLeft');
        if (canvas) {
            const offcanvas = new Offcanvas(canvas);

            canvas.addEventListener('hidden.bs.offcanvas', () => {
                if (mainContentRef.current) {
                    mainContentRef.current.focus();
                }
            });

            return () => {
                canvas.removeEventListener('hidden.bs.offcanvas', () => {});
            };
        }
    }, []);
    
    const handleOffCanvasClose = () =>{
        // const canvas = document.getElementsByClassName('offcanvas');
        // Array.from(canvases).forEach((canvas) => {
        //     canvas.setAttribute('aria-hidden', 'true'); // Example attribute
        // });

        // canvas.setAttribute("data-bs-dismiss", "offcanvas");
        // console.log(canvas);
        // const offcanvas = Offcanvas.getInstance(canvas) || new Offcanvas(canvas); 
        // console.log("got here");
        // offcanvas.hide();
        
        // console.log("one");
        // if (canvas) {
        //     const offcanvas = Offcanvas.getInstance(canvas) || new Offcanvas(canvas); // Get the Bootstrap instance
        //     console.log("got here");
        //     offcanvas.hide();
        // }
        // navigate('/');

        // if (canvas) {
        //     const offcanvas = Offcanvas.getInstance(canvas) || new Offcanvas(canvas);
        //     offcanvas.hide(); // Properly dismiss the offcanvas
        //     document.body.focus(); // Ensure focus is reset
        // }
    }
    const handleNavigateHome = () => {
        const canvas = document.getElementById('offcanvasLeft');
        console.log(canvas);
        const offcanvas = Offcanvas.getInstance(canvas) || new Offcanvas(canvas);
        console.log(offcanvas);
        offcanvas.hide();
        setTimeout(() => {
            const backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) backdrop.remove();
            document.body.classList.remove('offcanvas-backdrop');
            document.body.style.overflow = ''; // Reset overflow if locked
        }, 300);
        navigate('/')
    }

    const handleNavigateAbout = () => {
        const canvas = document.getElementById('offcanvasLeft');
        
        const offcanvas = Offcanvas.getInstance(canvas) || new Offcanvas(canvas);
        offcanvas.hide();
        setTimeout(() => {
            const backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) backdrop.remove();
            document.body.classList.remove('offcanvas-backdrop');
            document.body.style.overflow = ''; // Reset overflow if locked
        }, 300);
        navigate('/about')
    }
    
    return ( 
        <div className="navMenu" id="navMenu">
            
            <div className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" onClick={handleOffCanvasClose}>
                <i className="bi bi-list bi-xl"></i>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLeftLabel">Menu</h5>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                </div>
                <div className="offcanvas-body large">
                    {/* <p className="navmenuitem"><Link to="/">Home</Link></p>
                    <p className="navmenuitem"><Link to="/about">About Me</Link></p> */}

                    <p className="navmenuitem links" onClick={ handleNavigateHome }>Home</p>
                    <p className="navmenuitem links" onClick={ handleNavigateAbout }>About Me</p>

                    {/* <p><button className="navmenuitem" onClick={ handleNavigateHome }>Home</button></p>
                    <p><button className="navmenuitem" onClick={ handleNavigateAbout }>About Me</button></p> */}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;