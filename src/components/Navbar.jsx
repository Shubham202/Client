import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.setItem('author');
        navigate("/login");
        window.location.reload();
    };

    const user = localStorage.getItem("token");

    return ( 
        <nav>
            <div className="logo-title">
                <Link to="/">Quotes</Link>
            </div>
            <div className="nav-elements">
                <div className="elem">
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                {!user && <div className="element">
                    <Link to='/login'>Login</Link>
                    <div className="bar"></div>
                    <Link to='/register'>Register</Link>
                </div>}
                {user && <div className="element">
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </div>}
            </div>
        </nav>
     );
}
 
export default Navbar;