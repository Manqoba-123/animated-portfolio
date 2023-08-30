import Loader from 'react-loaders'
import './contact.scss'
import { useRef } from 'react'
import emailjs  from '@emailjs/browser';
import { toast } from 'react-toastify';



const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_lc7wxqp',
                'template_jquthjl',
                refForm.current,
                'WSIc0sTH9vL0E8zdQ',
            )
            try {
                toast.success("Message successfully sent!")
            } catch (error) {
                toast.error("Message failed to send, please try again")
            }
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <p>
                        I am interested in freelance opportunities and open to work as a 
                        fullstack developer. However, if you have any other requests or
                        questions, don't hesitate to contact me using below the form I provided.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
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