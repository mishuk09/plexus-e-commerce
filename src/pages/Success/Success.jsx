import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import success from "../../assets/success.png";

const Success = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.message) {
            setErrorMessage("Please fill in all fields.");
            setTimeout(() => {
                setErrorMessage("")
            }, 3000);
            return;
        }

        setIsLoading(true);
        setErrorMessage("");

        try {
            await emailjs.sendForm(
                "service_p3jakff",
                "template_cszjdjo",
                form.current,
                "uELA4WD47qGEFXLdA"
            );
            setSuccessMessage("📧 Email Sent Successfully!");
            setTimeout(() => {
                setSuccessMessage("")
            }, 3000);
            setFormData({ email: "", message: "" });
        } catch (error) {
            setErrorMessage("Failed to send email. Please try again.");

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {successMessage && <p className="text-white bg-green-500 rounded flex text-center items-center z-20 px-4 h-12 fixed top-0 right-2 mt-2">{successMessage}</p>}

            {errorMessage && <p className="text-white bg-red-500 rounded flex text-center items-center z-20 px-4 h-12 fixed top-0 right-2 mt-2">{errorMessage}</p>}

            <div className="mx-4 bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] rounded-2xl relative flex flex-col items-center justify-center text-center mt-12 md:mt-24 shadow-2xl py-8 md:py-14 gap-8">
                <div className="max-w-7xl mx-auto  ">
                    <p className="text-white text-center font-medium text-lg">
                        Be <span className="text-[#3B82F6] text-sm rounded-full py-1 px-2 bg-white">our</span> Part
                    </p>
                    <h2 className="text-3xl text-center mt-4 md:text-5xl font-bold text-white">
                        Be our next success story? 🚀
                    </h2>

                    {/* Form Section */}
                    <form ref={form} onSubmit={handleSubmit} className="mt-10 space-y-6 px-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full py-1 px-4 rounded-lg text-gray-900 bg-white bg-opacity-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                            />
                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full py-1 px-4 rounded-lg text-gray-900 bg-white bg-opacity-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md resize-none"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-1 px-4 bg-[#2563EB] text-white font-semibold rounded-md hover:bg-[#1E40AF] transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                            >
                                {isLoading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
                <img src={success} className="w-26 md:w-30 absolute right-0 top-[-50px]" alt="Success" />
            </div>
        </>
    );
};

export default Success;