import { useEffect, useState } from "react";
import { CheckCircle, Smile, Handshake } from 'lucide-react';
import countone from '../../assets/count1.png';
import counttwo from '../../assets/count2.png';


// eslint-disable-next-line react/prop-types
const Counter = ({ targetNumber }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = targetNumber;
        const duration = 1000; // Animation duration in ms
        const incrementTime = duration / end;

        const interval = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                clearInterval(interval);
            }
        }, incrementTime);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [targetNumber]);

    return <p className="text-[25px] md:text-[36px] count-down font-semibold text-gray-800">{count}</p>;
};




const Count = () => {
    return (

        <div className="max-w-7xl mx-auto rounded-2xl relative flex flex-col md:flex-row items-center justify-center text-center mt-12 md:mt-24 shadow-2xl   py-12 gap-8">
            {/* Service Done */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                <div className="flex gap-2 items-center justify-center">
                    <CheckCircle size={40} className="text-blue-600 drop-shadow-md" />
                    <h3 className="text-4xl font-bold text-gray-800"><Counter targetNumber={50} /></h3>
                </div>
                <p className="text-lg font-medium text-gray-600">Service Done</p>
            </div>

            {/* Happy Customers */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                <div className="flex gap-2 items-center justify-center">
                    <Smile size={40} className="text-green-600 drop-shadow-md" />
                    <h3 className="text-4xl font-bold text-gray-800"><Counter targetNumber={15} /></h3>
                </div>
                <p className="text-lg font-medium text-gray-600">Happy Customers</p>
            </div>

            {/* Partner Brands */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                <div className="flex gap-2 items-center justify-center">
                    <Handshake size={40} className="text-yellow-600 drop-shadow-md" />
                    <h3 className="text-4xl font-bold text-gray-800"><Counter targetNumber={5} /></h3>
                </div>
                <p className="text-lg font-medium text-gray-600">Partner Brands</p>
            </div>

            <img src={countone} className="w-24 absolute left-0 bottom-0" alt="" />
            <img src={counttwo} className="w-24 absolute  right-0 top-0" alt="" />
        </div>

    );
};

export default Count;