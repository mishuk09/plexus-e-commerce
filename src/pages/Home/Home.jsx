import bg from '../../assets/home.png';
import homebg from '../../assets/home-2.png';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import underimg from '../../assets/underimg.png';
import homeele from '../../assets/home-ele.png';


const Home = () => {
    return (
        <div
            className="h-full bg-cover bg-center relative  "
            style={{
                backgroundImage: `linear-gradient(359deg, transparent 0%, #e3e6fc 100%, #e3e6fc 100%, #e3e6fc 100%), url(${bg})`
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 lg:p-0 ">
                {/* Left Content */}
                <div className="space-y-5">
                    <p className="text-blue-600 font-semibold text-lg">Get Started</p>
                    <h1 className=' text-4xl md:text-6xl font-bold text-gray-800 leading-tight'>
                        Grow Your Business <br /> with
                        <span className='text-blue-600 ms-4 inline-block'>
                            Plexus
                            {/* Image Below Wallet Text */}
                            <div className='mt-[-10px]'>
                                <img src={underimg} alt="undereffect" className='w-[150px] md:w-[200px] h-auto' />
                            </div>
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg">
                        We enhance your online presence with expert SEO, PPC, and social media strategies—boost traffic, leads, and revenue effortlessly!
                    </p>

                  
                    <a href='/contact' className="pe-2 w-[180px]   ps-4 py-1 text-white bg-blue-500 hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-full font-medium flex items-center justify-between space-x-2">
                        <span>Get Started</span>
                        <span className="rounded-full px-2 py-2 bg-white text-blue-500 transition-all duration-300 ease-in-out group-hover:bg-black group-hover:text-white">
                            <ArrowUpRight size={20} />
                        </span>
                    </a>

                </div>

                {/* Right Image */}
                <div>
                    <motion.img
                        src={homebg}
                        alt="Digital Marketing"
                        className="w-full h-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </div>



            <img src={homeele} alt="" className=' absolute right-0 bottom-10 2xl:bottom-0 w-[70px] xl:w-[100px] 2xl:w-[200px]' />

        </div>
    );
};

export default Home;
