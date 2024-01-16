import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="mb-8">
      <div className="w-full  bg-[#585454] p-2 text-white relative flex items-center">
        {/* <div className="border border-[#474444] flex items-center justify-center"> */}
        <FaTools className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />

        <p className="text-2xl font-bold ml-14 uppercase">Education</p>
      </div>
      <div className="ml-16 mt-4">
        <div className="flex gap-8">
          <p className="font-bold">2015-2016</p>
          <div className="flex flex-col gap-1">
            <p className="font-bold">College Name</p>
            <p>BSC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
