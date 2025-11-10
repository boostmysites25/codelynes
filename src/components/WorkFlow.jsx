// import React from "react";
// import line from "../assets/images/line.png";
// import {
//   appDevelopmentWorkflow,
//   generalDevelopmentWorkflow,
//   webDevelopmentWorkflow,
// } from "../data/constant";

// const WorkFlow = ({ page }) => {
//   let workflow;

//   if (page === "web-development") {
//     workflow = webDevelopmentWorkflow;
//   } else if (page === "app-development") {
//     workflow = appDevelopmentWorkflow;
//   } else {
//     workflow = generalDevelopmentWorkflow;
//   }
//   return (
//     <div className="min-h-screen flex justify-center relative">
//       <div className="blurred-blue left-[-10%] bottom-[-10%]"></div>
//       <div
//         data-aos="fade-up"
//         className="wrapper flex flex-col items-center gap-5 z-10 py-10"
//       >
//         <div className="flex items-center gap-3">
//           <img src={line} alt="line" className="w-[3rem]" />
//           <h6 className="font-medium text-secondary">
//             How We Build Your Success
//           </h6>
//         </div>
//         <div className="z-10 grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 mx-auto max-w-6xl">
//           {workflow.map((item) => (
//             <div className="relative flex flex-col gap-2 items-start bg-primary/5 hover:bg-primary/10 rounded-lg p-5 hover:scale-105 transition-all duration-300">
//               <div className="absolute -z-0 flex justify-center items-center h-[7rem] w-[7rem] md:h-[9rem] md:w-[9rem] rounded-full bg-primary/10 bottom-1 right-1">
//                 <span className="text-7xl md:text-8xl text-white font-extrabold">
//                   {item.id}
//                 </span>
//               </div>
//               <div className="z-10 w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
//                 <img
//                   loading="lazy"
//                   width="50"
//                   height="50"
//                   src={item.icon}
//                   alt="icon"
//                   className="w-[3rem] grayscale"
//                 />
//               </div>
//               <h6 className="z-10 font-medium text-xl">{item.title}</h6>
//               <p className="z-10 text-gray-700 text-sm">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkFlow;


import React, { useState } from "react";
import img from "../assets/images/work-process.png";
import { ArrowDown, CodeXml, NotebookPen, Rocket } from "lucide-react";

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Requirement Gathering & Analysis",
    description:
      "In this phase, we work closely with clients to thoroughly understand their needs and objectives. Our team engages in detailed discussions to define the project's goals and scope, ensuring that all technical and business requirements are clearly documented and analyzed for feasibility.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Our expert designers create intuitive, user-friendly interfaces while ensuring that the overall user experience remains seamless. The development team then builds robust, scalable, and efficient solutions, adhering to industry best practices and using cutting-edge technologies to meet client expectations.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description:
      "This phase involves rigorous testing of the software to identify and fix any bugs or performance issues. We conduct various quality assurance checks to ensure the product meets the highest standards. Once finalized, we deploy the solution and provide continuous support to ensure smooth operations.",
    icon: Rocket,
  },
];


const WorkFlow = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <div className="relative flex justify-end bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url(${img})`}}>
      {/* <img
        data-aos="fade-up"
        src={img}
        className="absolute inset-0 -z-10 object-cover h-full w-full"
        alt="Work Process"
      /> */}
      <div
        data-aos="fade-up"
        className="bg-white/60 sm:w-3/5 md:w-5/12 h-full px-5 py-[4rem] space-y-5"
      >
        <h3 className="heading-2">How We Build</h3>
        <div className="">
          {workingProcess.map((item, i) => (
            <div
              key={item.title}
              className="py-5 transition-all duration-700 space-y-3 border-t border-white/30"
            >
              <button
                onClick={() => setCurrentIdx(i)}
                className="w-full flex gap-2 justify-between"
              >
                <div className="flex gap-3">
                  <item.icon size={30} strokeWidth={1.5} />
                  <p className="text-lg font-medium text-start">{item.title}</p>
                </div>
                <ArrowDown
                  className={`${
                    currentIdx === i && "rotate-180"
                  } text-white min-w-5 w-5 h-5`}
                />
              </button>
              {currentIdx === i && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
