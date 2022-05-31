import React from 'react';
import { StyleNavbar } from './style/Navbar.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isActive, setIsActive] = React.useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    }
    return (
        <StyleNavbar>
            <header>
                <h1>React Hooks</h1>
                <div className="nav-box">
                    <div className="nav-icon" onClick={toggle}>
                        {isActive ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faChartBar} />}
                    </div>
                    <nav className={isActive ? 'nav-list active' : 'nav-list'}>
                        <Link to="/">Home</Link>
                        <Link to="usestate">useState</Link>
                        <Link to="useeffect">useEffect</Link>
                        <Link to="usereducer">useReducer</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                    </nav>
                </div>
            </header>
        </StyleNavbar>
    );
}

export default Navbar;
