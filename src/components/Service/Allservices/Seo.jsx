import HomePage from '../../HomePage';
import bestseo from './img/ai.png';
import seo from './img/seo.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import keyword from './img/keyword.png';
import onpage from './img/onpage.png';
import offpage from './img/offpage.png';
import link from './img/link.png';
import ai from './img/ai.png';
import analysis from './img/analysis.png';
import backlink from './img/backlink.png';
import cms from './img/cms.png';
import data from './img/data.png';
import index from './img/index.png';
import localseo from './img/localseo.png';
import opt from './img/opt.png';
import voice from './img/voice.png';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import BlogSection from '../../../pages/BlogSection/BlogSection';
import ServiceBtn from '../../ServiceBtn';


const Seo = () => {

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
        {
            id: 1,
            img: keyword,
            title: "Keyword Research",
            details: "Finding high-impact search terms to optimize content and improve visibility.",
        },
        {
            id: 2,
            img: onpage,
            title: "On-Page SEO",
            details: "Optimizing content, meta tags, and structure for better search rankings.",
        },
        {
            id: 3,
            img: offpage,
            title: "Off-Page SEO",
            details: "Building authority through backlinks, social media, and external engagement.",
        },
        {
            id: 4,
            img: link,
            title: "Link Building",
            details: "Acquiring quality backlinks to enhance credibility and search rankings.",
        },
        {
            id: 5,
            img: analysis,
            title: "Analytics",
            details: "Tracking and analyzing website performance for data-driven decisions.",
        },
    ];

    const techItem = [
        {
            id: 1,
            img: index,
            title: "Crawling and Indexing",

        },
        {
            id: 2,
            img: keyword,
            title: "Keyword Research Tools",

        },
        {
            id: 3,
            img: cms,
            title: "CMS",

        },
        {
            id: 4,
            img: data,
            title: "Structured Data Markup",

        },

        {
            id: 5,
            img: opt,
            title: "WPO",

        },

        {
            id: 6,
            img: backlink,
            title: "Backlink Analysis Tools",

        },
        {
            id: 7,
            img: analysis,
            title: "Analytics Tools",

        },
        {
            id: 8,
            img: localseo,
            title: "Local SEO Tools",

        },
        {
            id: 9,
            img: voice,
            title: "VSO",

        },
        {
            id: 10,
            img: ai,
            title: "Artificial Intelligence",

        },

    ]
    return (
        <div className=' '>
            <div className=''>
                <div className=' max-w-7xl mx-auto'>

                    <HomePage ch1='Seo Optimization' head1='Get Seo Service' head2='With' head3='Plexus' btnname="Get Seo Service" btnhref='/contact'
                        description='Elevating online visibility and organic traffic through strategic optimization techniques' image={seo}>
                    </HomePage>
                </div>

                <div className='mt-20'>
                    <Headline headline=" Our Seo Services" ch1="Our" ch2="Seo" ch3="Service" seeMore={false} />

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
                                    className="group p-6 mx-3  bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow hover:scale-105"
                                >
                                    <img
                                        className="w-32 h-32 object-contain mx-auto  "
                                        src={unit.img}
                                        alt={unit.title}
                                    />
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
                        Exploring Top-tier SEO Agencies?
                    </h1>
                    <p className='text-justify font-nunito'>
                        We merge seasoned expertise with innovative strategies, offering scalable solutions that harness trending techniques to elevate online visibility and drive organic traffic.
                    </p>
                    <p className=' md:w-1/3'>
                        <ServiceBtn name='Get a free call ' href='/contact' />
                    </p>
                </div>
                <div className='flex justify-center items-center md:w-1/2'>
                    <img className='p-2 w-[300px] h-auto' src={bestseo} alt="SEO Services" />
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
    )
};

export default Seo;