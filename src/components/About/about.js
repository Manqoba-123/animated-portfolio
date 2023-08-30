import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>About me</h1>
                <p>Computer Science graduate majoring in Computer Science and
                    Applied Mathematics. Enthusiastic about Software Development.
                    A team player with a can-do attitude, curious by nature,
                    and enjoys learning new things.</p>
                <p>I'm a very ambitious fullstack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.Most of my previous work is in my github account, I have no working experience currently looking for entry level job</p>
            <p>If I need to define myself in one sentence that would be a family
            person, a sports fanatic, gamer(online gaming)
          and tech-obsessed.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                   <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color='#ff564d'/>
                   </div>
                   <div className='face2'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81' />
                   </div>
                   <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#0a78e3' />
                   </div>
                   <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#0048ba'/>
                   </div>
                   <div className='face5'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                   </div>
                   <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#ff7373'/>
                   </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About