import { useRef } from 'react';
import HomePage from '../../HomePage';
import web from './img/web.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import frontend from './img/frontend.png';
import backend from './img/backend.png';
import custom from './img/custom.png';
import ecomerse from './img/ecomerse.png';
import best from './img/best.png';
import javascript from './img/javascript.png';
import react from './img/react.png';
import express from './img/express.png';
import vue from './img/vue.png';
import typescript from './img/typescript.png';
import angular from './img/angularjs.png';
import nodejs from './img/nodejs.png';
import mongo from './img/mongo.png';
import wordpress from './img/wordpress.png';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import BlogSection from '../../../pages/BlogSection/BlogSection';

const Web = () => {
    const webItems = [
        { id: 1, img: custom, title: "Custom Development", details: "Tailoring software solutions to meet specific requirements." },
        { id: 2, img: frontend, title: "Front-End Development", details: "Designing user interfaces and experiences." },
        { id: 3, img: backend, title: "Back-End", details: "Building server-side logic and databases." },
        { id: 4, img: ecomerse, title: "E-commerce Website", details: "Developing online shopping platforms." },
        { id: 5, img: wordpress, title: "WordPress Development", details: "Creating and managing WordPress sites." },
    ];

    const techItem = [
        { id: 1, img: javascript, title: "Javascript" },
        { id: 2, img: react, title: "React" },
        { id: 3, img: typescript, title: "Typescript" },
        { id: 4, img: express, title: "Express JS" },
        { id: 5, img: vue, title: "Vue" },
        { id: 6, img: angular, title: "Angular" },
        { id: 7, img: nodejs, title: "Node JS" },
        { id: 8, img: mongo, title: "Mongo DB" },
        { id: 9, img: wordpress, title: "WordPress" },
    ];

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
    return (
        <div className=' '>
            <div >
                <div className='max-w-7xl mx-auto'>

                    <HomePage ch1='Website ' head1='Get website' head2='With' head3='Plexus' btnname="Get your website" btnhref='/contact'
                        description='We specialize in creating fantastic websites that not only look great but also function smoothly.' image={web}>
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


                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-lg bg-sky-200 mt-24 p-6 md:h-[300px]'>
                    <div className='flex flex-col justify-center md:w-1/2 space-y-4'>
                        <h1 className='font-bold text-3xl font-nunito'>
                            Exploring Top-notch Website Development Companies?
                        </h1>
                        <p className='text-justify font-nunito'>
                            Combining experience and innovation, we provide scalable solutions that leverage trending technologies.
                        </p>
                        <p>
                           
                        </p>
                    </div>
                    <div className='flex justify-center items-center md:w-1/2'>
                        <img className='p-2 w-[250px] h-auto' src={best} alt="Best Development" />
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
                                <div className="w-[130px] h-[130px] mx-auto flex items-center justify-center overflow-hidden">
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
                <div>
                    <BlogSection />
                </div>
            </div>
        </div>
    );
};

export default Web;
