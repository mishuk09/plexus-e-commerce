// src/components/DeletePost.js
import { useState } from 'react';
import axios from 'axios';
import Alert from '../../utills/Alert';
import { X } from 'lucide-react';


const DeletePost = ({ id, onClose, onDelete }) => {

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);



    const handleDelete = () => {
        setLoading(true)
        axios.delete(`https://plexus-backend-1.onrender.com/posts/${id}`)
            .then(() => {
                console.log('Post deleted.');
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false);
                    onDelete();
                    onClose();
                }, 1000);

            })
            .catch(err => console.log(err));

    }



    return (
        <>
            {success && (
                <Alert name='Delete successfull...' />
            )}
            <div className='fixed inset-0 bg-gray-900 opacity-50'
                onClick={onClose}>

            </div>
            <div className=" fixed inset-0 z-20 flex flex-col items-center justify-center h-[80vh]">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-4">Are you sure you want to delete this post?</h2>
                    <div className="flex justify-center">
                        <button
                            disabled={loading}
                            onClick={handleDelete}
                            className="flex items-center bg-red-500 text-white py-2 px-8 rounded-lg hover:bg-red-600 transition duration-200 mr-4"
                        >

                            Yes
                        </button>
                        <button
                            onClick={onClose}
                            className="flex items-center bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            <X className="mr-2" /> Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DeletePost;
