import { useEffect, useState } from "react";

import banner from '../Blog/img/banner.png';
import ServiceBtn from "../../components/ServiceBtn";


const Counter = ({ targetNumber }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = targetNumber;
        const duration = 1000; // Animation duration in ms
        const incrementTime = duration / end;

        const interval = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                clearInterval(interval);
            }
        }, incrementTime);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [targetNumber]);

    return <p className="text-[25px] md:text-[36px] count-down font-semibold text-gray-800">{count}</p>;
};

const About = () => {
    const clipPathStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };

    const clipPathStyletwo = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };



    return (
        <>
            <div style={clipPathStyle} className="bg-slate-200 relative w-full h-[400px] flex flex-col">
                <div style={clipPathStyletwo} className="pt-10 w-full h-[400px] flex flex-col text-center">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-slate-100 mt-10 text-5xl font-sans font-bold">
                           Know About <span className="text-blue-500">Plexus</span>
                        </h1>
                        <p className="text-slate-300 sm:w-[50%] mx-auto mt-4 font-nunito">
                            Unlocking the Power of Mindfulness! Learn how practicing mindfulness can transform your daily life, reduce stress, and enhance well-being in this comprehensive guide.
                        </p>
                        <div className="mt-10 mx-auto flex justify-center">
                            <ServiceBtn href="/contact" name="Write your query" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 py-10">
          


                <section className="custom-container mt-14 mb-20">
                    <div className="flex flex-col items-center text-center justify-center">
                        <p className="text-[12px]">
                            WELCOME TO PLEXUS
                        </p>
                        <p className="text-[20px] md:text-[36px] font-semibold text-gray-800">
                            Results-Driven Digital Marketing Solutions
                        </p>
                        <p className="text-[16px] text-gray-600 w-full text-justify md:text-center mt-4 md:w-[70%]">
                            With over 20 years of combined expertise, we craft impactful strategies tailored to elevate your brand's online presence, drive measurable growth, and deliver real results in an ever-evolving digital world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-20 border-b pb-10 md:pb-20">
                        <div className="flex flex-col items-center text-center justify-center">
                            <Counter targetNumber={5} />
                            <p className="text-[18px] font-semibold">Campaigns Executed</p>
                            <p className="w-[80%] text-gray-600">
                                From social media to SEO, we’ve successfully launched 300+ campaigns across various industries.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <Counter targetNumber={10} />
                            <p className="text-[18px] font-semibold">Satisfied Clients</p>
                            <p className="w-[80%] text-gray-600">
                                Our client-first approach ensures long-term success and strong brand loyalty.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <Counter targetNumber={2} />
                            <p className="text-[18px] font-semibold">Industry Awards</p>
                            <p className="w-[80%] text-gray-600">
                                Recognized for excellence and innovation in digital marketing campaigns worldwide.
                            </p>
                        </div>
                    </div>
                </section>




                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-14">
                    <div className="overflow-hidden rounded-md">
                        <img
                            className="rounded-md w-full md:h-[500px] hover:scale-110 duration-300"
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Digital Strategy Team at Work"
                        />
                    </div>
                    <div className="flex items-center text-center justify-center">
                        <div className="flex flex-col items-center text-center justify-center">
                            <p className="text-[12px]">
                                OUR EXPERTS
                            </p>
                            <p className="text-[20px] md:text-[36px] font-semibold text-gray-800">
                                Data-Driven, Creative, and Impactful
                            </p>
                            <p className="text-[16px] mt-4 text-gray-600 w-full md:w-[90%]">
                                Our dedicated team of digital marketers, strategists, and creatives work collaboratively to craft campaigns that convert. We believe in building lasting relationships with clients and using analytics to fine-tune every move.
                            </p>
                            <button className="factory-btn rounded-full mt-6">
                                MEET THE TEAM
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-20">
                    <div className="flex items-center text-center justify-center">
                        <div className="flex flex-col items-center text-center justify-center">
                            <p className="text-[12px]">
                                OUR STANDARDS
                            </p>
                            <p className="text-[20px] md:text-[36px] font-semibold text-gray-800">
                                Timeless Strategies, Measurable Growth
                            </p>
                            <p className="text-[16px] mt-4 text-gray-600 w-full md:w-[90%]">
                                At Aliyl Digital, we focus on strategies that last. Our campaigns are crafted with precision and built to deliver consistent results. From SEO to paid ads, every move is based on insights and quality execution—designed to work today, tomorrow, and long into the future.
                            </p>
                            <button className="factory-btn rounded-full mt-6">
                                EXPLORE OUR WORK
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden mt-6 md:mt-0 rounded-md">
                        <img
                            className="rounded-md w-full md:h-[500px] hover:scale-110 duration-300"
                            src="https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Team Analyzing Marketing Data"
                        />
                    </div>
                </div>






                <div className="mt-14 md:mt-28 mb-20">
                    <div className="flex flex-col items-center text-center justify-center">
                        <p className="text-[12px]">WHY CHOOSE US</p>
                        <p className="text-[20px] md:text-[36px] font-semibold text-gray-800">
                            What Makes Us Different
                        </p>
                        <p className="text-[16px] text-gray-600 w-full md:w-[70%] mt-4">
                            At Aliyl Digital, we blend creativity, strategy, and data-driven decisions to deliver marketing that’s not just smart—but unforgettable. Here’s what sets us apart.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        {/* Who We Are */}
                        <div className="w-full rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    className="w-full h-[300px] hover:scale-110 duration-300"
                                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Team Collaboration"
                                />
                            </div>
                            <div className="px-6 pt-4 items-center text-center">
                                <div className="font-bold text-xl mb-2">Who We Are</div>
                                <p className="text-gray-700 text-base">
                                    A team of creatives, strategists, and analysts with a mission to grow brands with purpose and precision. We care about results and relationships equally.
                                </p>
                            </div>
                        </div>

                        {/* What We Do */}
                        <div className="w-full rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    className="w-full h-[300px] hover:scale-110 duration-300"
                                    src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg"
                                    alt="Digital Tools"
                                />
                            </div>
                            <div className="px-6 py-4 items-center text-center">
                                <div className="font-bold text-xl mb-2">What We Do</div>
                                <p className="text-gray-700 text-base">
                                    From SEO and content to social media and paid campaigns, we tailor full-funnel marketing solutions that actually convert—backed by performance metrics.
                                </p>
                            </div>
                        </div>

                        {/* Join Our Team */}
                        <div className="w-full rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    className="w-full h-[300px] hover:scale-110 duration-300"
                                    src="https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Creative Office Culture"
                                />
                            </div>
                            <div className="px-6 py-4 items-center text-center">
                                <div className="font-bold text-xl mb-2">Join Our Team</div>
                                <p className="text-gray-700 text-base">
                                    We're always looking for passionate marketers and creatives to join us. If you're curious, driven, and love ideas that spark results—we’d love to meet you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </>
    );
};

export default About;
