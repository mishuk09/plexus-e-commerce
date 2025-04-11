
import HomePage from '../../HomePage';
import graphic from './img/graphic.png'
import graphiccc from './img/graphiccc.png';
import Headline from '../../Headline';
import logo from './img/logo.png';
import flayer from './img/flayer.png';
import social from './img/social.png';
import banner from './img/banner.png';
import billbord from './img/billbord.png';
import poster from './img/poster.png';
import pak from './img/pak.png';
import aii from './img/aii.png';
import ps from './img/ps.png';
import figma from './img/figma.png';
import canva from './img/canva.png';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import BlogSection from '../../../pages/BlogSection/BlogSection';
import ServiceBtn from '../../ServiceBtn';

const Graphic = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    const webItems = [
        { id: 1, img: logo, title: "Logo Design", details: "Unique, scalable, and brand-focused." },
        { id: 2, img: flayer, title: "Flyer Design", details: "Eye-catching and informative." },
        { id: 3, img: social, title: "Social Media Post", details: "EPO." },
        { id: 4, img: banner, title: "Banner Design", details: "Bold and attention-grabbing." },
        { id: 5, img: billbord, title: "Billboard Design", details: "Minimal text, high visibility." },
        { id: 6, img: poster, title: "Poster Design", details: "Striking visuals, clear message." },
        { id: 7, img: pak, title: "Package Design", details: "Functional and brand-aligned." }
    ];

    const techItem = [
        {
            id: 1,
            img: ps,
            title: "Javascript",

        },
        {
            id: 2,
            img: aii,
            title: "React",

        },
        {
            id: 3,
            img: figma,
            title: "Typescript",

        },
        {
            id: 4,
            img: canva,
            title: "Express JS",

        },


    ]
    return (
        <div className='  '>
            <div className=' '>
                <div className=' max-w-7xl mx-auto'>
                    <HomePage ch1='Graphic Design' head1='Get Graphic Design' head2='With' head3='Plexus' btnname="Get Graphic Design" btnhref='/contact'
                        description='We specialize in designing fantastic websites that not only look great but also function smoothly.' image={graphic}>
                    </HomePage>

                </div>
                <div className='mt-20'>
                    <Headline headline=" Our Wetsite Services" ch1="Our" ch2="Web" ch3="Service" seeMore={false} />

                </div>

                <div className='bg-blue-50'>
                    <div className="my-10 max-w-7xl mx-auto  px-4 py-4   ">
                        <Carousel
                            responsive={responsive}
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            className="py-6"
                        >
                            {webItems.map((unit) => (
                                <div
                                    key={unit.id}
                                    className="group p-6 mx-3 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow hover:scale-105"
                                >
                                    <div className="w-32 h-32 mx-auto relative">
                                        <img
                                            className="w-full h-full object-contain absolute inset-0"
                                            src={unit.img}
                                            alt={unit.title}
                                        />
                                    </div>
                                    <div className="text-slate-900 flex flex-col justify-between h-auto mt-4 text-center">
                                        <p className="text-lg font-semibold text-gray-800">{unit.title}</p>
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{unit.details}</p>
                                    </div>
                                </div>
                            ))}

                        </Carousel>
                    </div>
                </div>


            </div>

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-lg bg-sky-200 mt-24 p-6 md:h-[300px]'>
                <div className='flex flex-col justify-center md:w-1/2 space-y-4'>
                    <h1 className='font-bold text-3xl font-nunito'>
                        Exploring Top-notch Website Development Companies?
                    </h1>
                    <p className='text-justify font-nunito'>
                        Integrating experience with innovative approaches, we offer scalable solutions that harness the latest trends and technologies to elevate visual creativity
                    </p>
                    <p className=' md:w-1/3'>
                        <ServiceBtn name='Get a free call ' href='/contact' />
                    </p>

                </div>

                <div className='w-[50%] sm:w-[100%]  xs:w-[100%] xs:mt-3 sm:mt-0 md:w-[50%] flex items-center text-center justify-center'>
                    <img className=' p-2 xs:w-[300px] sm:w-[300px] h-full' src={graphiccc} alt="" />
                </div>

            </div>
            <div className='mt-[100px] max-w-7xl mx-auto  '>
                <Headline headline=" Technology we work on" ch1="Technology" ch2="We" ch3="Use" seeMore={false} />
                <div className="grid grid-cols-2  lg:grid-cols-7 bg-white p-5 gap-4 lg:gap-6 mt-6 justify-center  ">
                    {techItem.map((tutorial) => (
                        <div
                            key={tutorial.id}
                            className="shadow-md rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105 bg-gray-50"
                        >
                            <div className="w-[80px] h-[80px] mx-auto flex items-center justify-center overflow-hidden">
                                <img
                                    className="w-full h-full object-cover rounded-md"
                                    src={tutorial.img}
                                    alt={tutorial.title}
                                />
                            </div>
                            <p className="text-gray-800 mt-3 font-semibold text-sm">{tutorial.title}</p>
                        </div>
                    ))}
                </div>

            </div>
            <BlogSection />

        </div>

    );
};

export default Graphic;