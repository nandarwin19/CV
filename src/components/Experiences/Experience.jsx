import { MdWork } from "react-icons/md";

const Experience = ({ experienceData }) => {
  console.log(experienceData);
  const { company, position, start, end, location, description } =
    experienceData;

  return (
    <div className="mb-8">
      <div className="w-full  bg-[#585454] p-2 text-white relative flex items-center">
        <MdWork className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />

        <p className="text-2xl font-bold ml-14 uppercase">Work Experiences</p>
      </div>
      <div className="ml-16 mt-4 text-black/80">
        <div className="flex">
          <div
            className="font-bold flex-shrink-0 flex flex-col gap-1"
            style={{ width: "150px" }} //*******
          >
            <p style={{ whiteSpace: "nowrap" }}>
              {start}-{end}
            </p>
            <p>{location}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-lg text-black/90 font-bold">{position}</p>
            <p className="font-bold">{company}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
