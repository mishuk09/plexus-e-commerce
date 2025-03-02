import { useEffect, useState } from 'react';
// import img1 from '../../assets/blog/blog-img-01.jpg';
// import img2 from '../../assets/blog/blog-img-02.webp';
// import img3 from '../../assets/blog/blog-img-03.webp';
import Headline from '../../components/Headline';
// import { useNavigate } from 'react-router-dom';
// import img4 from '../../assets/blog/blog-img-04.webp';

const BlogSection = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://digital-backend-7van.onrender.com/blogs')
            .then(response => response.json())
            .then(data => {
                // console.log("Fetched data:", data); // Debugging line
                if (Array.isArray(data.blogs)) { // Check if blogs exists and is an array
                    setBlog(data.blogs.slice(0, 4));
                } else {
                    console.error("API response does not contain an array:", data);
                }
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);




    return (
        <section className="py-12 mt-10 px-4 max-w-7xl mx-auto">

            <Headline headline=" Let's update with our Blog" ch1="Our" ch2="Latest" ch3="Blog" seemore="/blog " />

            <div className="grid mt-10 md:grid-cols-4 gap-10">
                {/* Main Blog Section */}
                <div className="md:col-span-2">
                    {
                        blog.slice(0, 1).map((post) => (
                            // eslint-disable-next-line react/jsx-key
                            <a href={`/blogsdetails/${post._id}`} key={post._id} className="relative rounded-xl"

                            >
                                <img
                                    src={post.photourl}
                                    alt="Main Blog"
                                    className="w-full h-[400px] object-cover rounded-lg"
                                />
                                <div className="absolute cursor-pointer bottom-0 left-0 right-0 rounded-b-lg bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.2)] p-4 text-white text-center transition-all duration-300">
                                    <p className="text-sm text-white">
                                        By <span className="text-blue-500">Admin</span> • August 08, 2024
                                    </p>
                                    <h3 className="text-xl font-semibold mt-2">
                                        What Does The Future Hold For Digital Marketing?
                                    </h3>
                                </div>
                            </a>
                        ))
                    }
                </div>

                {/* Other Blog Posts Section */}
                <div className="md:col-span-2 space-y-6">
                    {blog.slice(1, 4).map((post) => (
                        < a href={`/blogsdetails/${post._id}`} key={post._id} className="flex    hover:shadow-lg transition-all duration-300 delay-100 cursor-pointer  border-gray-300  rounded-lg shadow items-center gap-4">
                            <img
                                src={post.photourl}
                                alt={post.name}
                                className="w-40 h-40 rounded-lg object-cover"
                            />
                            <div>
                                <p className="text-sm text-gray-600">
                                    By <span className="text-blue-500">{post.author}</span> • {post.date}
                                </p>
                                <h3 className="text-lg font-semibold">{post.name}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default BlogSection;
