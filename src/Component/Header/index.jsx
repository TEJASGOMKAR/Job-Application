import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'


const Header = ()=>{

    const navigate = useNavigate();

    const onLogout = ()=>{
        Cookies.remove("jwtToken");

        navigate("/login");
    }
    // Logout Button Concept


    return (

        <nav className='my-nav'>
                <Link to = "/"> 
                    <h3 className='web-logo'>SimpliGO </h3> 
                </Link>

                <ul className='nav-ul-cont'>
                    <li>
                        <Link to = "/" className='my-nav-items'>Home</Link>
                    </li>
                    <li>
                        <Link to = "/jobs" className='my-nav-items'>Jobs</Link>
                    </li>
                </ul>

                <button className='btn btn-success' onClick={onLogout}>Logout</button>

        </nav>

    )
}


export default Header;
