import PropTypes from 'prop-types';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import bg from '../../assets/home.png';


const ContactPage = () => {
    return (
        <section id='contact' className=' h-full bg-cover bg-center relative flex flex-col items-center py-14  '
            style={{
                backgroundImage: `linear-gradient(359deg, transparent 0%, #e3e6fc 100%, #e3e6fc 100%, #e3e6fc 100%), url(${bg})`
            }}>
            <div className='max-w-7xl mx-auto   grid grid-cols-1  md:grid-cols-2   gap-12 px-6'>
                <div className='  flex flex-col items-center bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-6'>Contact Information</h3>
                    <div className='w-full space-y-4'>
                        <ContactDetail icon={<Mail size={20} />} label='Email' value='websiteslogan@gmail.com' />
                        <ContactDetail icon={<Phone size={20} />} label='Call' value='+91 70xxxxxxx' />
                        <ContactDetail icon={<MapPin size={20} />} label='Location' value='RK University, Rajkot, Gujarat, India' />
                        <iframe
                            className='rounded w-full h-60'
                            title='Google Map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66894.57039211194!2d83.91777138944921!3d28.216037765898744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara%2C%20Nepal!5e0!3m2!1sen!2sbd!4v1740762280601!5m2!1sen!2sbd"
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>


                    </div>
                </div>
                <div className='  w-full'>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

const ContactDetail = ({ icon, label, value }) => (
    <div className='flex items-center gap-4 p-4 bg-gray-50 shadow rounded-lg'>
        <div className='p-3 rounded-full bg-blue-600 text-white'>
            {icon}
        </div>
        <div>
            <p className='font-semibold text-gray-700'>{label}</p>
            <p className='text-sm text-gray-600'>{value}</p>
        </div>
    </div>
);

ContactDetail.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};



const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_p3jakff', 'template_cszjdjo', form.current, 'uELA4WD47qGEFXLdA')
            .then(() => {
                alert('Email Sent Successfully');
                setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' });
            });
    };

    return (
        <div className="bg-white p-6 rounded-lg h-full overflow-hidden shadow-lg flex flex-col">
            <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
                How Can We Help You?
            </h3>
            <form ref={form} className="space-y-4 flex flex-col flex-grow min-h-0" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                    <InputField type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField type="text" name="phoneNumber" placeholder="Phone" value={formData.phoneNumber} onChange={handleInputChange} />
                    <InputField type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} />
                </div>
                <textarea
                    className="input-field flex-grow min-h-[150px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <button className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </div>

    );
};

const InputField = ({ type, name, placeholder, value, onChange }) => (
    <input
        className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
    />
);

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ContactPage;
