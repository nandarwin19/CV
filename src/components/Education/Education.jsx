import { GiGraduateCap } from "react-icons/gi";
const Education = ({ educationData }) => {
  const { school, degree, start, end } = educationData;
  return (
    <div className="mb-8">
      <div className="w-full bg-[#585454] p-2 text-white relative flex items-center">
        {/* <div className="border border-[#474444] flex items-center justify-center"> */}
        <GiGraduateCap className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />

        <p className="text-2xl font-bold ml-14 uppercase">Education</p>
      </div>
      <div className="ml-16 mt-4 text-black/80">
        <div className="flex">
          <div
            className="font-bold flex-shrink-0"
            style={{ width: "150px" }} //*******
          >
            <p className="font-bold">
              {start}-{end}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-lg">{school}</p>
            <p>{degree}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
