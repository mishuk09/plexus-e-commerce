import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import onecoin from '../../assets/onecoin.png'
import mulcoin from '../../assets/mulcoin.png'



const Price = () => {
    const [billingCycle, setBillingCycle] = useState("annually");

    const plans = [
        { name: "Standard", price: 22, popular: false },
        { name: "Business", price: 33, popular: true },
        { name: "Ultimate", price: 44, popular: false },
    ];

    return (
        <div className="flex relative pt-10 flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white p-6">
            <img src={onecoin} className="absolute top-10 left-4 md:left-20 w-10 md:w-20 " alt="" />
            <img src={mulcoin} className="absolute bottom-10 right-10 w-24 " alt="" />
            <p className="text-gray-600 font-medium text-center md:text-start text-lg">
                Explore <span className="text-blue-500 text-sm rounded-full py-1 px-2 bg-gray-300">Our</span> Price
            </p>
            <h2 className="text-4xl mt-4 text-center md:text-start md:text-5xl font-bold text-gray-800">
                Pricing plan for your Business
            </h2>

            <div className="flex items-center space-x-2 mt-4 mb-8">
                <span className="text-blue-600 ">Monthly</span>
                <label className="relative inline-flex cursor-pointer items-center">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={billingCycle === "annually"}
                        onChange={() =>
                            setBillingCycle(billingCycle === "annually" ? "monthly" : "annually")
                        }
                    />
                    <div className="peer-checked:bg-blue-600 w-14 h-7 bg-gray-300 rounded-full p-1 flex items-center">
                        <div className="h-5 w-5 bg-white rounded-full transform transition-transform peer-checked:translate-x-7"></div>
                    </div>
                </label>
                <span className="text-gray-600">Annually - Save 50%</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center border ${plan.popular ? "border-blue-600" : "border-gray-200"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-tr-2xl rounded-bl-2xl">
                                Popular
                            </div>

                        )}
                        <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                        <p className="text-4xl font-bold mb-2">
                            ${billingCycle === "annually" ? plan.price : plan.price * 2}
                            <span className="text-sm font-normal"> per user/month</span>
                        </p>
                        <p className="text-sm text-gray-500 mb-4">billed {billingCycle}</p>
                        <ul className="text-gray-600 space-y-2 text-sm mb-6">
                            <li>✅ Individuals & small projects</li>
                            <li>✅ Access to design features</li>
                            <li>✅ Limited library of decorative items</li>
                            <li>✅ Email support</li>
                            <li>✅ Monthly updates</li>
                        </ul>


                        <a
                            href={plan.popular}
                            className={`pe-2 w-40 ps-4 cursor-pointer mt-6 py-1 ${plan.popular
                                ? "bg-blue-600 text-white hover:bg-black"
                                : "bg-black text-white hover:bg-blue-500"
                                }   text-white   hover:text-white transition-all duration-300 ease-in-out rounded-full font-medium flex items-center space-x-2`}
                        >
                            <span>Get Started</span>
                            <span className="rounded-full px-2 py-2 price-btn bg-white text-blue-500">
                                <ArrowUpRight size={20} />
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
