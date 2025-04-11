import BlogSection from '../../../pages/BlogSection/BlogSection';
import Headline from '../../Headline';
import ServiceBtn from '../../ServiceBtn';
import Carousel from "react-multi-carousel";
import HomePage from '../../HomePage';

import graphic from './img/socialmedia.png';
import socialMediaaa from './img/socialMediaaa.png';
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
// import { PenTool, Image, Instagram, Clipboard, Landmark, FileText, Package } from "lucide-react";
import { Megaphone, Users, TrendingUp, MessageSquare, Globe, PlayCircle, BarChart, Facebook, Instagram, Twitter, Linkedin, Youtube, Zap } from "lucide-react";


const Social = () => {

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


    const socialMediaItems = [
        { id: 1, img: <Megaphone size={80} className="text-green-500" />, title: "Ad Campaigns", details: "Targeted and data-driven marketing." },
        { id: 2, img: <Users size={80} className="text-blue-500" />, title: "Community Management", details: "Engaging and growing your audience." },
        { id: 3, img: <TrendingUp size={80} className="text-purple-500" />, title: "SEO & Optimization", details: "Boosting reach and visibility." },
        { id: 4, img: <MessageSquare size={80} className="text-orange-500" />, title: "Content Marketing", details: "Creative and compelling storytelling." },
        { id: 5, img: <Globe size={80} className="text-red-500" />, title: "Brand Awareness", details: "Building a strong online presence." },
        { id: 6, img: <PlayCircle size={80} className="text-yellow-500" />, title: "Video Marketing", details: "Engaging visuals and storytelling." },
        { id: 7, img: <BarChart size={80} className="text-teal-500" />, title: "Analytics & Insights", details: "Tracking performance for growth." }
    ];


    const techItem = [
        {
            id: 1,
            img: <Facebook size={50} className="text-blue-600" />,
            title: "Facebook Ads",
        },
        {
            id: 2,
            img: <Instagram size={50} className="text-pink-500" />,
            title: "Instagram Marketing",
        },
        {
            id: 3,
            img: <Twitter size={50} className="text-blue-400" />,
            title: "Twitter Promotions",
        },
        {
            id: 4,
            img: <Linkedin size={50} className="text-blue-700" />,
            title: "LinkedIn Outreach",
        },
        {
            id: 5,
            img: <Youtube size={50} className="text-red-500" />,
            title: "YouTube Advertising",
        },
        {
            id: 6,
            img: <BarChart size={50} className="text-green-500" />,
            title: "Analytics & Insights",
        },
        {
            id: 7,
            img: <Zap size={50} className="text-yellow-500" />,
            title: "Automation & AI Tools",
        }


    ]
    return (
        <div className='  '>
            <div className=' '>
                <div className=' max-w-7xl mx-auto'>
                    <HomePage ch1='Social Media' head1='Get Social Service' head2='from' head3='Plexus' btnname="Get social service" btnhref='/contact'
                        description='We specialize in crafting powerful social media marketing strategies that not only boost engagement but also drive real results! 🚀.' image={graphic}>
                    </HomePage>

                </div>
                <div className='mt-20'>
                    <Headline headline=" Our Social Media Services" ch1="Our" ch2="Social" ch3="Service" seeMore={false} />

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
                            {socialMediaItems.map((unit) => (
                                <div
                                    key={unit.id}
                                    className="group h-70 p-6 mx-3 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow hover:scale-105"
                                >
                                    <div className="w-32 h-32 mx-auto flex items-center justify-center  relative">


                                        {unit.img}

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

            <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center rounded-lg bg-purple-200 mt-24 p-6 md:h-[300px]">
                <div className="flex flex-col justify-center md:w-1/2 space-y-4">
                    <h1 className="font-bold text-3xl font-nunito">
                        Need Expert Social Media Marketing?
                    </h1>
                    <p className="text-justify font-nunito mt-3">
                        Amplify your brand’s reach with data-driven strategies, creative storytelling, and engaging content to maximize visibility and audience interaction.
                    </p>
                    <p className="md:w-1/3 mt-2">
                        <ServiceBtn name="Want a Call" href="/contact" />
                    </p>
                </div>

                <div className="w-[50%] hidden  sm:w-[100%] xs:w-[100%] xs:mt-3 sm:mt-0 md:w-[50%] md:flex items-center text-center justify-end pe-20">
                    <img className="p-2 xs:w-[300px] sm:w-[300px] h-full" src={socialMediaaa} alt="Social Media Marketing" />
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
                                {/* <img
                                    className="w-full h-full object-cover rounded-md"
                                    src={tutorial.img}
                                    alt={tutorial.title}
                                /> */}
                                {tutorial.img}
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

export default Social;