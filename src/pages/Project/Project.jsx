import { ArrowUpRight } from 'lucide-react'
import projectone from '../../assets/projects/eeeeeeeeeeeeeeeeee.png'
import projecttwo from '../../assets/projects/bbbbbbbbbb.png'
import projectth from '../../assets/projects/tttttttt.png'
import projectfo from '../../assets/projects/ererer.png'
import projectfi from '../../assets/projects/csehackssss.png'
import projectsix from '../../assets/projects/project-img-08-960x960.webp'
import projectsev from '../../assets/projects/project-img-09-960x960.webp'

const projects = [
    {
        title: "Ecommerce Website",
        description: "A fully functional ecommerce platform with seamless checkout and user authentication.",
        image: projectone,
        link: "https://e-commerce-4103d.web.app/",
    },
    {
        title: "Crypto Wallet WEB 3 Application",
        description: "A decentralized wallet application for managing cryptocurrencies.",
        image: projecttwo,
        link: "https://merchant-wallet-verification.web.app/",
    },
    {
        title: "Tip Wallet WEB 3 Application",
        description: "A decentralized wallet application for managing cryptocurrencies.",
        image: projectth,
        link: "https://tip-wallet-check.web.app/",
    },
    {
        title: "Salluloze Ecommerce",
        description: "A fully functional ecommerce platform with seamless checkout and user authentication.",
        image: projectfo,
        link: "https://sallylooze.com/",
    },
    {
        title: "CSEHacks Learning Platform",
        description: "An interactive learning platform designed for coding enthusiasts and students.",
        image: projectfi,
        link: "https://csehacks.tech/",
    },

    // {
    //     title: "Smart Home Automation",
    //     description: "A cutting-edge smart home solution integrating IoT and AI.",
    //     image: projectfo,
    //     link: "#",
    // },
    // {
    //     title: "AI Chatbot",
    //     description: "An intelligent chatbot for customer support and automation.",
    //     image: projectfi,
    //     link: "#",
    // },
    // {
    //     title: "Smart Home Automation",
    //     description: "A cutting-edge smart home solution integrating IoT and AI.",
    //     image: projectsix,
    //     link: "#",
    // },
    // {
    //     title: "AI Chatbot",
    //     description: "An intelligent chatbot for customer support and automation.",
    //     image: projectsev,
    //     link: "#",
    // },
];

const Project = () => {
    return (
        <div className="py-12 bg-gray-100 mt-20">
            <div className="px-6 text-center overflow-hidden">
                <p className="text-gray-600 text-center font-medium text-lg">
                    Our <span className="text-blue-500 text-sm rounded-full py-1 px-2 bg-gray-300">Recent </span> Work
                </p>

                <h2 className="text-4xl text-center mt-4 md:text-5xl font-bold text-gray-800">
                    Check  our recent work.
                </h2>

                <div className="mt-10 flex overflow-x-auto space-x-6 scrollbar-custom">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-xl border border-gray-300 overflow-hidden w-[340px] md:w-[370px] flex-shrink-0"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute cursor-pointer bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.2)] p-4 text-white text-center transition-all duration-300">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pe-2 mt-2 ps-4 w-32 text-center mx-auto text-sm py-1 bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-blue-500 rounded-full font-medium flex items-center space-x-2"
                                >
                                    <span>See more</span>
                                    <span className="rounded-full px-1 py-1 bg-blue-500 text-white">
                                        <ArrowUpRight size={15} />
                                    </span>
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Project;

