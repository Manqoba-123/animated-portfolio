import Loader from 'react-loaders'
import './contact.scss'
import { Input } from '@material-ui/icons'


const Contact = () => {
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text'
                                    name='name'
                                    placeholder='Your name'
                                    required />
                                </li>
                                <li className='half'>
                                    <input type='email'
                                    name='email'
                                    placeholder='Your email' />
                                </li>
                                <li>
                                   <input type='text'
                                   name='subject'
                                   placeholder='Subject'
                                   required
                                    />
                                </li>
                                <li>
                                    <textarea name='message'
                                    placeholder='Message'
                                    required></textarea>
                                </li>
                                <li >
                                    <input type='submit'
                                    className='flat-button'
                                    value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact