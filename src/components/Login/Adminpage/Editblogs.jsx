import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EditItem from './EditItem';

const EditBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        fetch('https://plexus-backend-1.onrender.com/read')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.blogs)) {
                    setBlogs(data.blogs);
                } else {
                    console.error("API response does not contain an array:", data);
                }
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);

    const handleEditClick = (blog) => {
        setSelectedBlog(blog);
    }

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://plexus-backend-1.onrender.com/delete/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'Blog deleted successfully') {
                        const remaining = blogs.filter(blog => blog._id !== id);
                        setBlogs(remaining);
                    } else {
                        console.error('Error:', data.error);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    const handleBlogUpdate = (updatedBlog) => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) => (blog._id === updatedBlog._id ? updatedBlog : blog))
        );
        setSelectedBlog(null); // Clear selected blog after update
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
            <h1 className="text-center font-bold text-5xl mt-5">Manage Blog</h1>
            <div className="grid grid-cols-2 mt-10 md:grid-cols-3 xs:grid-cols-1 gap-3 mb-10">
                {blogs.map(blog => (
                    <div key={blog._id} className="w-[100%] p-2 border border-gray-300  rounded mx-auto flex">
                        <div className="w-[30%]   flex items-center">
                            <img className="w-20 h-20 rounded" src={blog.photoUrl} alt={blog.title} />
                        </div>
                        <div className="w-[70%] xs:text-sm md:text-lg  font-bold">
                            {blog.title} <br />
                            <p className="mt-2 w-full">
                                <button
                                    className="bg-blue-600 text-white font-thin text-sm px-2 py-1 rounded-full"
                                    onClick={() => handleEditClick(blog)}
                                >
                                    Edit Post
                                </button>
                                <button
                                    className="bg-red-600 text-white font-thin text-sm px-2 py-1 rounded-full ml-2"
                                    onClick={() => handleDelete(blog._id)}
                                >
                                    Delete
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show the Edit Item component when a blog is selected */}
            {selectedBlog && <EditItem
                blog={selectedBlog}
                onBlogUpdate={handleBlogUpdate}
                setSelectedBlog={setSelectedBlog} // Pass the setSelectedBlog function to EditItem
            />}
        </div>
    );
};

// PropTypes validation for EditBlogs component
EditBlogs.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            photoUrl: PropTypes.string.isRequired,
        })
    ),
};

export default EditBlogs;
