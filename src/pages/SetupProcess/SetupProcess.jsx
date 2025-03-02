import process from '../../assets/process-imh.webp';
import start from '../../assets/star.png';

const steps = [
    { id: "01", title: "Creative Idea", description: "Brainstorm and define a clear vision for your project." },
    { id: "02", title: "Making Projects", description: "Design, develop, and build your project to bring your idea to life." },
    { id: "03", title: "Growth & Scale", description: "Optimize and expand the project to increase reach and impact." },
];

export default function SetupProcess() {
    return (
        <div className="container relative max-w-7xl mt-20 mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-gray-600 font-medium text-center md:text-start text-lg">Crafting <span className="text-blue-500 text-sm rounded-full  py-1 px-2 bg-gray-300">Setup</span> Process</p>
                <h2 className="text-4xl mt-4 text-center md:text-start md:text-5xl font-bold text-gray-800  ">What to expect? easy setup process</h2>

                <div className="mt-8 space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex text-start md:items-start gap-2 md:gap-4">
                            <div className="flex items-center hover:scale-110 transition-all duration-300 cursor-pointer justify-center border-2 border-blue-600 text-blue-500 rounded-full font-bold  md:text-lg shadow-lg w-12 h-8 md:w-15 md:h-15">
                                {step.id}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-gray-500">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Illustration Section */}
            <div className="lg:w-1/2 flex justify-center">
                <img src={process} alt="" />

            </div >
            <img src={start} className="w-16 md:w-24 absolute  right-0 top-0" alt="" />

        </div >
    );
}
