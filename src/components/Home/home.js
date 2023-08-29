import './home.scss'
import LogoS from '../../assets/images/icons8-m-key-50.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi there,<br />
                I'm <img src={LogoS} alt='dev' />anqoba <img src={LogoS} alt='dev' />Langeni <br />
                web developer 
                </h1>
                <h2>Fullstack Developer / Mathematician</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home