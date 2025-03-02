import PropTypes from "prop-types";

import ServiceBtn from "./ServiceBtn";

const HomePage = ({
    ch1,
    description = "Default Description",
    image,
    head1,
    head2,
    head3,
    btnname,
    btnhref



}) => {
    return (
        <div className=" max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2  gap-10  ">
            {/* Left Section */}
            <div className=" flex flex-col items-center text-center md:text-start mt-10 md:mt-20 relative">

                <div className="space-y-5">
                    <p className="text-blue-600 font-semibold">{ch1}</p>
                    <h1 className=' text-4xl md:text-6xl font-bold text-gray-800 leading-tight'>
                        {head1}<br /> {head2}
                        <span className='text-blue-600 ms-4 inline-block'>
                            {head3}
                            <div className='mt-[-10px]'>

                            </div>
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg">
                        {description}  </p>
                </div>
                <div className="flex w-full gap-3 container mt-6">
                    <ServiceBtn href={btnhref} name={btnname} />
                </div>

            </div>

            {/* Right Section */}
            <div className=" ">
                {image && <img className="w-[450px] mt-6 xs:w-[360px] md:w-[360px] lg:w-[450px]" src={image} alt="Main" />}
            </div>
        </div>
    );
};

// ✅ PropTypes Validation
HomePage.propTypes = {
    headline: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    ch1: PropTypes.string,
    head1: PropTypes.string,
    head2: PropTypes.string,
    head3: PropTypes.string,
    btnname: PropTypes.string,
    btnhref: PropTypes.string,

};

export default HomePage;
