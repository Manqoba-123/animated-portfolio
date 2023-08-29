import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import LogoM from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome}  color="#f5f5dc" />
            </NavLink>
            <NavLink className="about-link" 
             exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser}  color="#f5f5dc" />
            </NavLink>
            <NavLink className="contact-link"
            exact="true" activeclassname="active" to="contact">
                <FontAwesomeIcon icon={faEnvelope} color="#f5f5dc" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" 
                href="https://linkedin.com/in/manqoba-sbonelo-mlangeni/">
                  <FontAwesomeIcon icon={faLinkedin} color='#2acaea'/>  
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" 
                href="https://github.com/Manqoba-123/">
                  <FontAwesomeIcon icon={faGithub} color='#101010' />  
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" 
                href="https://twitter.com/Manqoba59850820/">
                  <FontAwesomeIcon icon={faX} color='#ffffff' />  
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar