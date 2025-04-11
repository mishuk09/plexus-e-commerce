// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import { ArrowRight } from 'lucide-react';  // Import the Lucide ArrowRight icon
import banner from './img/banner.png';
// import { useNavigate } from 'react-router-dom';
import Headline from '../../components/Headline';
import ServiceBtn from '../../components/ServiceBtn';
import { useEffect, useState } from 'react';

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







export default function Blog() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://plexus-backend-1.onrender.com/read')
            .then(response => response.json())
            .then(data => {
                // console.log("Fetched data:", data); // Debugging line
                if (Array.isArray(data.blogs)) { // Check if blogs exists and is an array
                    setBlog(data.blogs);
                } else {
                    console.error("API response does not contain an array:", data);
                }
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);


    return (
        <div className="bg-blue-50">
            <div style={clipPathStyle} className="bg-slate-200 relative w-full h-[400px] flex flex-col">
                <div style={clipPathStyletwo} className="pt-10 w-full h-[400px] flex flex-col text-center">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-slate-100 mt-10 text-5xl font-sans font-bold">
                            Plexus For <span className="text-blue-500">Knowledge</span>
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

            <div className="max-w-7xl mx-auto flex justify-center items-center top-[250px]">
                <div className="bg-white p-6 mt-8 w-full h-auto rounded-lg shadow-xl">
                    <div className="mt-10">
                        <Headline headline="Stay Updated with Us" ch1="Read" ch2="Our" ch3="Blogs" seeMore={false} />
                    </div>

                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blog.map((post) => (
                                // eslint-disable-next-line react/jsx-key
                                <a href={`/blogsdetails/${post._id}`} key={post._id}
                                    className="bg-white cursor-pointer rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                                >
                                    {/* Image Section */}
                                    <div className="relative">
                                        <img
                                            className="w-full h-48 object-cover rounded-t-lg"
                                            src={post.photoUrl}
                                            alt={post.name}
                                        />
                                        <div className="absolute inset-0 bg-black opacity-20 rounded-t-lg"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="px-6 py-4 flex flex-col justify-between" style={{ flex: 1 }}>
                                        <div>
                                            <div className="font-semibold text-xl text-gray-800 mb-3">{post.title}</div>
                                            <p
                                                className="text-gray-600 text-base line-clamp-2"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                                dangerouslySetInnerHTML={{ __html: post.content }}
                                            ></p>
                                        </div>

                                        {/* Footer Section */}
                                        <div className="px-6 py-3 mt-4 flex justify-between items-center border-t border-gray-200">
                                            <div>
                                                <span className="inline-block bg-gray-100 text-xs text-gray-600 font-medium py-1 px-3 rounded-full">
                                                    {post.date}
                                                </span>
                                            </div>
                                            <div>
                                                <button
                                                    // onClick={() => navigateToServiceDetail(unit._id)}
                                                    className="flex items-center text-sm text-indigo-600 font-semibold hover:text-indigo-800 transition duration-200"
                                                >
                                                    Read More <ArrowRight className="ms-2" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
