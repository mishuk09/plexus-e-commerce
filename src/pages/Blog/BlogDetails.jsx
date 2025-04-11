import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import { Clock } from 'lucide-react';

const BlogDetails = () => {
    const { id } = useParams();

    const [blog, setBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);  // Ensure loading is true when fetching
            try {
                const response = await fetch(`https://plexus-backend-1.onrender.com/posts/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data);
                } else {
                    console.error('Failed to fetch blog details');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false); // Make sure to toggle loading after the fetch is done
            }
        };

        fetchBlog();
    }, [id]);


    useEffect(() => {
        axios.get('https://plexus-backend-1.onrender.com/posts/')
            .then(response => {
                // setPosts(response.data.slice(0, 12));
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);



    return (
        <div className='bg-blue-50 pb-10 min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex gap-4 pt-4'>
                    <div className="w-[20%] md:w-[30%] border h-full border-gray-200 bg-white rounded-xl p-4 hidden md:flex flex-col shadow-sm">
                        {blogs ? (
                            blogs.slice(0, 4).map((blog) => (
                                <a
                                    key={blog._id}
                                    href={`/product/${blog._id}`}

                                    className="w-full flex items-center gap-4 p-3 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-[20%] aspect-square flex items-center justify-center overflow-hidden rounded">
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-[70%] truncate">
                                        <span className="font-medium text-gray-900">{blog.title}</span>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <Skeleton height={100} count={3} />
                        )}
                    </div>


                    <div className='w-full  md:w-[60%] border border-gray-300 bg-white rounded h-auto px-4 md:px-2'>
                        {loading || !blog ? (
                            <>
                                <Skeleton height={30} width={'80%'} />
                                <Skeleton height={20} width={'50%'} className='mt-2' />
                                <Skeleton height={300} className='mt-4' />
                                <Skeleton height={100} className='mt-4' />
                            </>
                        ) : (
                            <>
                                <p className='font-bold text-2xl mt-2 tracking-wide'>{blog.title}</p>
                                <p className='mt-2 flex gap-1 text-xs text-slate-500'>
                                    <Clock size={15} />
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>

                                <img className='w-full rounded mt-4' src={blog.img} alt={blog.title} />
                                <div className='text-justify pt-10' dangerouslySetInnerHTML={{ __html: blog.description }} />
                            </>
                        )}

                    </div>
                    <div className='w-[20%] border border-gray-300 flex-col hidden md:flex bg-white rounded h-[400px]'></div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
