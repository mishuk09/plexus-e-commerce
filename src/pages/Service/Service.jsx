import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import web from '../../assets/web.png';
import seo from '../../assets/seo.png';
import graphic from '../../assets/graphic.png';
import social from '../../assets/social.png';

const services = [
    {
        name: "🌐 Web Development",
        image: web,
        details: "We create stunning and responsive web designs to enhance user experience.",
        icon: <ArrowUpRight size={20} />,
        route: "/web"
    },
    {
        name: "🔍 SEO",
        image: seo,
        details: "Optimize your website for search engines to improve visibility and ranking.",
        icon: <ArrowUpRight size={20} />,
        route: "/seo"
    },
    {
        name: "🎨 Graphic Design",
        image: graphic,
        details: "Boost your brand's online presence through strategic marketing campaigns.",
        icon: <ArrowUpRight size={20} />,
        route: "/graphic"
    },
    {
        name: "📱 Social Media",
        image: social,
        details: "Build high-performance mobile applications tailored to your needs.",
        icon: <ArrowUpRight size={20} />,
        route: "/social"
    },
];

export default function Service() {
    const [selectedService, setSelectedService] = useState(services[0]);

    const handleHover = (service) => {
        setSelectedService(service);
    };

    return (
        <div>
            <div className="h-full bg-cover bg-center">
                <div className="max-w-7xl mx-auto mt-20 p-6 rounded-lg">
                    <p className="text-gray-600 text-center font-medium text-lg">
                        Our <span className="text-blue-500 text-sm rounded-full py-1 px-2 bg-gray-300">all</span> Services
                    </p>

                    <h2 className="text-4xl text-center mt-4 md:text-5xl font-bold text-gray-800">
                        We Offer Services
                    </h2>

                    <div className="md:flex  mt-14 gap-20">
                        {/* Service List */}
                        <div className="space-y-4 md:w-180 flex-initial">
                            {services.map((service) => (
                                <a
                                    key={service.name}
                                    href={service.route}
                                    onMouseEnter={() => handleHover(service)}
                                    className={`flex justify-between w-full px-6 py-4 text-left font-semibold border border-gray-200 rounded-full transition-all duration-300 delay-75 hover:bg-blue-500 hover:text-white ${selectedService.name === service.name ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                                >
                                    {service.name}
                                    {service.icon}
                                </a>
                            ))}
                        </div>

                        {/* Service Image with Animation */}
                        <motion.div
                            key={selectedService.image} // Triggers animation on change
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex-initial w-full mt-6 md:mt-0"
                        >
                            <img
                                src={selectedService.image}
                                alt={selectedService.name}
                                className="w-full object-cover rounded-lg shadow-md"
                            />
                        </motion.div>

                        {/* Service Details with Animation */}
                        <motion.div
                            key={selectedService.name} // Triggers animation on change
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex-initial md:w-200 mt-6 md:mt-0 items-start justify-center flex flex-col"
                        >
                            <p className="text-2xl font-bold">{selectedService.name}</p>
                            <p className="text-gray-500 mt-4">{selectedService.details}</p>
                            <a
                                href={selectedService.route}
                                className="pe-2 w-40 ps-4 mt-14 py-1 service-btn-p bg-black text-white hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out rounded-full font-medium flex items-center space-x-2"
                            >
                                <span>Get Started</span>
                                <span className="rounded-full px-2 py-2 service-btn bg-blue-500 text-white">
                                    <ArrowUpRight size={20} />
                                </span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
