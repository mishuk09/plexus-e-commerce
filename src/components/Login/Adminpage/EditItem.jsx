import { useState, useEffect } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import Alert from '../../utills/Alert';
import { X } from 'lucide-react';

const EditItem = ({ id, onClose, onUpdate }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [existingImages, setExistingImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [successfull, setSuccessfull] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const response = await axios.get(`https://plexus-backend-1.onrender.com/posts/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const post = response.data;
                setTitle(post.title || '');
                setAuthor(post.author || '');
                setDescription(post.description || '');
                setExistingImages(post.img || []);
            } catch (error) {
                console.error('Failed to fetch post:', error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    window.location.href = '/signin';
                }
            }
        };

        fetchPost();
    }, [id]);

    const handleImageChange = (e) => {
        setNewImages(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);

        // Append both existing and new images
        existingImages.forEach((img) => formData.append('existingImages[]', img));
        newImages.forEach((img) => formData.append('images', img));

        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            await axios.post(`https://plexus-backend-1.onrender.com/posts/update/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccessfull(true);
            onUpdate();
            setTimeout(() => setSuccessfull(false), 3000);
        } catch (err) {
            console.error('Update failed:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {successfull && <Alert name="Post Updated Successfully!" />}

            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
                <div className="max-w-4xl 2xl:max-w-7xl max-h-[500px] 2xl:max-h-[600px] relative overflow-y-auto overflow-x-hidden h-auto bg-white p-4 rounded">

                    <button onClick={onClose} className='absolute top-2 right-3'><X size={18} /></button>
                    <h2 className="text-2xl font-semibold text-center mb-4">Edit Post</h2>

                    <div className="flex gap-2 flex-wrap mb-4">
                        {existingImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`existing-${index}`}
                                className="w-16 h-16 object-cover border rounded"
                            />
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Add New Images:</label>
                            <input
                                type="file"
                                multiple
                                onChange={handleImageChange}
                                className="mt-1 w-full p-1 text-xs border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title:</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="mt-1 w-full border px-3 py-1 rounded text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Author:</label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="mt-1 w-full border px-3 py-1 rounded text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description:</label>
                            <JoditEditor
                                value={description}
                                tabIndex={1}
                                onBlur={(newContent) => setDescription(newContent)}
                            />
                        </div>



                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-10 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                        >
                            Update Post
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditItem;
