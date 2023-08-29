import './home.scss'
import LogoS from '../../assets/images/icons8-m-key-50.png';
import Picture from '../../assets/images/IMG_20210514_165644.jpg'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

const Home = () => {
    return (
       <>
         <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi there,<br />
                I'm <img src={LogoS} alt='dev' />anqoba <img src={LogoS} alt='dev' />langeni <br />
                web developer 
                </h1>
                <h2>Fullstack Developer / Mathematician</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='pacman' />
       </>
    )
}

export default Home