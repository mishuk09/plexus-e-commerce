import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Mesut Celik, zaventeam",
        location: "Georgia, USA",
        image: "https://media.licdn.com/dms/image/v2/C5603AQFG18bfFgbxhA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1630594224676?e=2147483647&v=beta&t=HWfzyMqWeQg9DPnmnHcWzP2LBvdzXXuYVOtpAOfOqXk",
        review: "Single Page Responsive Design",
    },
    {
        name: "Samrat Sarker",
        location: "Rajkot, INDIA",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHc3YA9zN9qWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673169096900?e=1749686400&v=beta&t=uxpADMuYP2BG5VEMNJOWuXSyaA2Bw8Dqgo9XAHryk-8",
        review: "Timely delivery, highly recommended",
    },
    {
        name: "Samrat Sarker",
        location: "Rajkot, INDIA",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHc3YA9zN9qWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673169096900?e=1749686400&v=beta&t=uxpADMuYP2BG5VEMNJOWuXSyaA2Bw8Dqgo9XAHryk-8",
        review: "Great experience working with Mahadi. He was professional, communicated well, and delivered high-quality work on time. Highly recommend him for professional projects.",
    },
    // {
    //     name: "Sophia Lee",
    //     location: "California, USA",
    //     image: "https://via.placeholder.com/50",
    //     review: "Highly professional and creative! I love their work and would recommend them to anyone.",
    // },
    // {
    //     name: "Alex Zender",
    //     location: "Georgia, USA",
    //     image: "https://via.placeholder.com/50",
    //     review: "Fantastic service! They truly understand design and functionality. Highly recommend!",
    // },
    // {
    //     name: "Sophia Lee",
    //     location: "California, USA",
    //     image: "https://via.placeholder.com/50",
    //     review: "Highly professional and creative! I love their work and would recommend them to anyone.",
    // },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default: 2 testimonials per slide

    useEffect(() => {
        const updateItemsPerSlide = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 1 : 2); // 1 item for small screens, 2 for larger screens
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <section className="py-12 mt-14 bg-white text-center">
            <div className="px-4">
                <p className="text-gray-600 font-medium text-center text-lg">
                    Explore <span className="text-blue-500 text-sm rounded-full py-1 px-2 bg-gray-300">Our</span> Price
                </p>
                <h2 className="text-4xl mt-4 text-center md:text-5xl font-bold text-gray-800">
                    Loved by our customers
                </h2>

                {/* Testimonials Carousel */}
                <div className="max-w-7xl mx-auto mt-10 relative flex justify-center items-center">
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="min-w-full flex gap-6 justify-center">
                                    {testimonials
                                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                        .map((testimonial, index) => (
                                            <div
                                                key={index}
                                                className="w-full sm:w-1/2 p-6 rounded-2xl border border-gray-300 shadow bg-gray-50 text-left"
                                            >
                                                <div className="flex gap-1 mb-4 text-yellow-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={20} fill="currentColor" stroke="none" />
                                                    ))}
                                                </div>
                                                <p className="mb-4 text-gray-700">{testimonial.review}</p>
                                                <div className="flex items-center gap-3 mt-4">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-12 h-12 rounded-full border"
                                                    />
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-blue-600">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-blue-600 w-5" : "bg-gray-400"
                                }`}
                            onClick={() => setActiveIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
