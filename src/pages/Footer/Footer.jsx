import { Facebook, Instagram, Code, Mail, Settings, Layers, MapPin, User } from 'lucide-react';

const Footer = () => {
    return (
        <div id='footer' className='w-full'>
            <div className='bg-slate-950  pt-10   px-4  h-auto  lg:h-[230px]'>
                <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
                    <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left text-slate-300 gap-10">

                        {/* Branding Section */}
                        <div className="flex-1 flex flex-col items-center  md:items-center">
                            <h2 className="text-white font-bold text-4xl">Plexus</h2>
                            <p className="font-nunito text-sm text-slate-300 mt-2 text-justify md:text-left">
                                Your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth.
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="flex-1 hidden md:flex flex-col items-center md:items-start justify-center">
                            <p className="font-bold text-blue-500 pb-2">All About</p>
                            <a href="/about" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <User className="inline-block mr-2" size={20} /> About
                            </a>
                            <a href="/web" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Code className="inline-block mr-2" size={20} /> Web
                            </a>
                            <a href="/seo" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Layers className="inline-block mr-2" size={20} /> SEO
                            </a>
                            <a href="/social" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Settings className="inline-block mr-2" size={20} /> Social Media
                            </a>
                        </div>

                        {/* Contact Section */}
                        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
                            <p className="font-bold text-blue-500 pb-2">Contact</p>
                            <p className="font-nunito text-sm mt-2">
                                <MapPin className="inline-block mr-2" size={20} /> Rajkot, Gujarat, India
                            </p>
                            <p className="font-nunito text-sm mt-2">
                                <Mail className="inline-block mr-2" size={20} /> services@plexus.org.in
                            </p>
                            <div className="mt-3 space-x-4">
                                <a href="https://web.facebook.com/profile.php?id=61574721125786&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="inline-block hover:text-blue-500" size={24} />
                                </a>
                                <a href="https://www.instagram.com/plexus_dgm/" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="inline-block hover:text-blue-500" size={24} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;