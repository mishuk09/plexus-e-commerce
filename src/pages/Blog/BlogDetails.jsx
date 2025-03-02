import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Import Lucide icons

const BlogDetails = () => {
    const { blogid } = useParams();
    const navigate = useNavigate();
    const [prevBlog, setPrevBlog] = useState(null);
    const [nextBlog, setNextBlog] = useState(null);
    const [blog, setBlog] = useState({});
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://digital-backend-7van.onrender.com/blogs/${blogid}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data);
                } else {
                    console.error('Failed to fetch blog details');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlog();
    }, [blogid]);

    useEffect(() => {
        const fetchBlogList = async () => {
            try {
                const response = await fetch('https://digital-backend-7van.onrender.com/blogs');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data.blogs.slice(0, 4));
                } else {
                    console.error('Failed to fetch blog list');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogList();
    }, []);

    useEffect(() => {
        const currentIndex = blogs.findIndex(b => b._id === blogid);
        setPrevBlog(currentIndex > 0 ? blogs[currentIndex - 1] : null);
        setNextBlog(currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null);
    }, [blogid, blogs]);

    const navigateToServiceDetail = id => {
        navigate(`/blogsdetails/${id}`);
    };

    return (
        <div className='bg-blue-50 pb-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex gap-4 pt-4'>
                    {/* Blog list */}
                    <div className='w-[20%] h-full md:flex flex-col  hidden  md:w-[40%] lg:w-[30%] border border-gray-300 bg-white rounded-lg p-2'>
                        {blogs.map(unite => (
                            <Link
                                key={unite._id}
                                to={`/blogsdetails/${unite._id}`}
                                className='w-full p-2 mb-4 flex h-auto bg-white rounded-lg  shadow-lg  '
                                onClick={(e) => { e.preventDefault(); navigateToServiceDetail(unite._id); }}
                            >
                                <div className='w-[30%] h-25 flex items-center justify-center'>
                                    <img className='w-full h-full object-cover rounded-md' src={unite.photourl} alt={unite.name} />
                                </div>
                                <div
                                    className='ps-4 w-[70%] flex items-center'
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 1,  // Limit to 1 line
                                        WebkitBoxOrient: 'horizontal',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',  // Ensure text doesn't wrap to next line
                                    }}
                                >
                                    <span className='font-semibold  text-gray-800'>{unite.name}</span>
                                    <div>
                                        <span className='inline-block bg-gray-100 text-xs text-gray-600 font-medium py-1 px-3 rounded-full'>
                                            {unite.date}
                                        </span>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Current Blog */}
                    <div className='  w-[100%] md:w-[60%] border border-gray-300 bg-white rounded h-auto px-2'>
                        <p className='font-verdina font-bold text-2xl mt-2 tracking-wide'>{blog.name}</p>
                        <p className='mt-1 text-slate-600 text-sm'>Date: <span>{blog.date}</span></p>
                        <img className='w-full rounded mt-4' src={blog.photourl} alt="" />
                        <div className='text-justify pt-10 font-nunito ' dangerouslySetInnerHTML={{ __html: blog.description }} />
                        <div className="flex justify-between mt-10 mb-3">
                            <div className="rounded-full bg-green-500 text-white px-3 py-1">
                                {prevBlog && <Link to={`/blogsdetails/${prevBlog._id}`}><ArrowLeft className="me-2" />Prev</Link>}
                            </div>
                            <div className="rounded-full bg-green-500 text-white px-3 py-1">
                                {nextBlog && <Link to={`/blogsdetails/${nextBlog._id}`}>Next <ArrowRight className="ms-2" /></Link>}
                            </div>
                        </div>
                    </div>
                    {/* Placeholder */}
                    <div className='w-[20%] border border-gray-300 flex-col  hidden md:flex bg-white rounded h-[400px]'></div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
