import { useState, useRef } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import { X } from 'lucide-react';
import Alert from '../../components/utills/Alert';


const AddBlogs = ({ onClose, onAdd }) => {
    // const [img, setImg] = useState(null);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const editor = useRef(null);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        // formData.append('image', img);
        images.forEach(image => formData.append('images', image));
        formData.append('title', title);
        formData.append('author', author);
        formData.append('description', description);

        try {
            const res = await axios.post('http://localhost:5000/posts/add', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Reset fields
            setImages([]);
            setTitle('');
            setAuthor('');
            setDescription('');
            setSuccessMessage(true);
            onAdd()
            setTimeout(() => setSuccessMessage(false), 3000);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);  // Stop loading once the request completes
        }
    };




    return (
        <>
            {successMessage && (
                <Alert name='Added Successfully!' />
            )}



            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">

                <div className="max-w-4xl 2xl:max-w-7xl max-h-[500px] 2xl:max-h-[600px] relative overflow-y-auto overflow-x-hidden h-auto bg-white p-4 rounded">

                    <button onClick={onClose} className='absolute top-2 right-3'><X size={18} /></button>

                    <h2 className="text-2xl text-center font-semibold mb-6">Add New Blog</h2>

                    <form onSubmit={handleSubmit} className="space-y-4" method="POST" encType="multipart/form-data">
                        <div className="grid lg:grid-cols-3 gap-2 lg:gap-4">

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Images</label>
                                <input
                                    type="file"
                                    name="images"
                                    onChange={handleImageChange}
                                    multiple
                                    required
                                    className="mt-1 block w-full p-1 h-8 text-xs border border-gray-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="mt-1 block w-full p-1 h-8 text-xs border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Author</label>
                                <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                    className="mt-1 block w-full p-1 h-8 text-xs border border-gray-300 rounded"
                                />
                            </div>




                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                tabIndex={1}
                                onBlur={(newContent) => setDescription(newContent)}
                                onChange={(newContent) => setDescription(newContent)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 w-full bg-blue-500 p-2 h-10  text-white rounded-md   flex items-center justify-center"
                        >

                            Add Post
                        </button>



                    </form>
                </div>
            </div>


        </>
    );
}

export default AddBlogs;
