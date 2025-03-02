import { ArrowUpRight } from 'lucide-react';
import PropTypes from "prop-types";

const ServiceBtn = ({ name, href }) => {
    return (
        <div>
            <a href={href} className="pe-2 cursor-pointer w-full ps-4 py-1 text-white bg-blue-500 hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-full font-medium flex items-center justify-between space-x-2">
                <span>{name}</span>
                <span className="rounded-full px-2 py-2 bg-white text-blue-500 transition-all duration-300 ease-in-out group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight size={20} />
                </span>
            </a>
        </div>
    );
};

ServiceBtn.propTypes = {
    name: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default ServiceBtn;
