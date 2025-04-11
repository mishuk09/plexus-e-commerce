// useBlogs.js
import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [categoriesWithCount, setCategoriesWithCount] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://digital-backend-7van.onrender.com/blogs');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    console.error('Error fetching blogs');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchCategoriesWithCount = async () => {
            try {
                const response = await fetch('https://api-1-122j.onrender.com/blog/categoriesWithCount');
                if (response.ok) {
                    const data = await response.json();
                    setCategoriesWithCount(data);
                } else {
                    console.error('Error fetching categories with count');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
        fetchCategoriesWithCount();
    }, []);

    return { blogs, categoriesWithCount, loading };
};

export default useBlogs;
