import { Star, BarChart, LineChart, Search, TrendingUp } from "lucide-react";
import dot from '../../assets/dot.png'
const features = [
    {
        icon: <LineChart className="text-blue-500 w-10 h-10" />,
        title: "Real Time Analytics",
        description: "Digital marketing involves the promotion of products."
    },
    {
        icon: <TrendingUp className="text-green-500 w-10 h-10" />,
        title: "Keywords Analytics",
        description: "Digital marketing involves the promotion of products."
    },
    {
        icon: <Search className="text-red-500 w-10 h-10" />,
        title: "SEO Optimization",
        description: "Digital marketing involves the promotion of products."
    },
    {
        icon: <BarChart className="text-yellow-500 w-10 h-10" />,
        title: "Boost Performance",
        description: "Digital marketing involves the promotion of products.",
        highlighted: true
    }
];

export default function Features() {
    return (
        <>
                <img src={dot} alt="" className="absolute  mt-17 w-[200px] " />
            <div className="mt-20  ">

                <div className="bg-blue-50 relative z-20 max-w-7xl rounded-md  mx-auto py-12 px-6 md:px-14">

                    <div className="  mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-gray-600 font-medium text-center md:text-start text-lg">Why <span className="text-blue-500 text-sm rounded-full  py-1 px-2 bg-gray-300">Choose</span> Us</p>

                            <h2 className="text-4xl mt-4 text-center md:text-start md:text-5xl font-bold text-gray-800  ">Take your website to the next level</h2>
                            <p className="text-gray-600 text-lg mt-6">We curate an excellent quality hand-crafted email template designs that</p>
                            <div className="flex items-center mt-6 space-x-3">
                                <div className="flex -space-x-2 overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User1" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User2" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="User3" className="w-10 h-10 rounded-full border-2 border-white" />
                                </div>
                                <div className="ms-2  ">
                                    <div className="flex items-center text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5" fill="currentColor" stroke="none" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 font-medium mt-1">120+ reviews <span className="text-blue-500">(4.95 of 5)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-lg shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-105 ${feature.highlighted ? "bg-yellow-50 border-yellow-500" : "bg-white"}`}
                                >
                                    {feature.icon}
                                    <h3 className="text-lg font-bold text-gray-900 mt-4">{feature.title}</h3>
                                    <p className="text-gray-600 mt-2">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
