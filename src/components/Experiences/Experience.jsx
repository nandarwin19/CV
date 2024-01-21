import { MdWork } from "react-icons/md";

const Experience = ({ edata }) => {
  console.log(edata);
  const { company, position, start, end, location, description, hidden } =
    edata;

  return (
    <>
      {!hidden ? (
        <div className="mb-8">
          <div className="ml-16 mt-4 text-black/80">
            <div className="flex">
              <div
                className=" flex-shrink-0 flex flex-col gap-1"
                style={{ width: "150px" }} //*******
              >
                {start && end && (
                  <p style={{ whiteSpace: "nowrap" }} className="font-bold">
                    {start}-{end}
                  </p>
                )}
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
      ) : null}
    </>
  );
};

export default Experience;
