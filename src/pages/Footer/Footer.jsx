import { Facebook, Instagram, Briefcase, Code, Mail, Settings, Headphones, Layers, MapPin, Users } from 'lucide-react';

const Footer = () => {
    return (
        <div id='footer' className='w-full'>
            <div className='bg-slate-950  pt-10   px-4  h-auto  lg:h-[230px]'>
                <div className='max-w-7xl mx-auto pb-4 grid grid-cols-1 md:grid-cols-4 items-center justify-center text-center'>
                    <div className='w-full h-full xs:text-center flex flex-col items-center justify-center overflow-hidden'>
                        <div className='text-white font-bold text-4xl'>
                            Plexus
                        </div>
                        <div className='font-nunito text-sm text-slate-300 py-2 text-justify'>
                            Your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth.
                        </div>
                    </div>
                    <div className='grid xs:grid-cols-2'>
                        <div className='w-full text-slate-300 h-full text-start mt-0'>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-bold text-blue-500 py-4'>About</p>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Users className='inline-block me-2 ' size={20} />Team</p>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Headphones className='inline-block me-2 ' size={20} />Support</p>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Briefcase className='inline-block me-2 ' size={20} />Career</p>
                        </div>
                        <div className='w-full md:hidden text-slate-300 h-full text-start mt-0'>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-bold text-blue-500 py-4'>Service</p>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Code className='inline-block me-2 ' size={20} />Web</p>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Layers className='inline-block me-2 ' size={20} />SEO</p>
                            <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Settings className='inline-block me-2 ' size={20} />Social Media</p>
                        </div>
                    </div>
                    <div className='w-full xs:hidden md:block text-slate-300 h-full text-start mt-0'>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-bold text-blue-500 py-4'>Service</p>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Code className='inline-block me-2 ' size={20} />Web</p>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Layers className='inline-block me-2 ' size={20} />SEO</p>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Settings className='inline-block me-2 ' size={20} />Social Media</p>
                    </div>
                    <div className='w-full text-slate-300 h-full text-start xs:mt-14 sm:mt-0'>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-bold text-blue-500 py-3'>Contact</p>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><MapPin className='inline-block me-2 ' size={20} />Rajkot, Gujarat, India</p>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-2'><Mail className='inline-block me-2 ' size={20} />services@plexus.org.in</p>
                        <p className='ps-2 md:ps-10 xs:ps-2 font-nunito text-sm mt-3'>
                            <a href="https://web.facebook.com/profile.php?id=61574721125786&_rdc=1&_rdr#" target='_blank' rel='noopener noreferrer'>
                                <Facebook className='inline-block me-3 hover:text-blue-500' size={24} />
                            </a>
                            <a href="https://www.instagram.com/plexus_dgm/" target='_blank' rel='noopener noreferrer'>
                                <Instagram className='inline-block me-3 hover:text-blue-500' size={24} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;