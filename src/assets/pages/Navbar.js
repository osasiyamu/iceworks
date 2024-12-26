// import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navMenu" id="navMenu">
            
            <div class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                <i class="bi bi-list bi-xl"></i>
            </div>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLeftLabel">Menu</h5>
                    {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                </div>
                <div class="offcanvas-body large">
                    {/* <p className="navmenuitem"><Link to="/">Home</Link></p>
                    <p className="navmenuitem"><Link to="/about">About Me</Link></p> */}

                    <p className="navmenuitem"><a href="/iceworks/#/">Home</a></p>
                    <p className="navmenuitem"><a href="/iceworks/#/about" >About Me</a></p>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;