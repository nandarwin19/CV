import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const ExperienceForm = ({
  updateExperienceData,
  experienceData,
  hiddenExperience,
  setHiddenExperience,
}) => {
  const [open, setOpen] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const ExperienceDatas = [
    {
      name: "Company Name",
      label: "company",
      value: experienceData.company,
      setter: (value) => updateExperienceData("company", value),
    },
    {
      name: "Position",
      label: "position",
      value: experienceData.position,
      setter: (value) => updateExperienceData("position", value),
    },
    {
      name: "Start Date",
      label: "Start",
      value: experienceData.start,
      setter: (value) => updateExperienceData("start", value),
    },
    {
      name: "End Date",
      label: "End",
      value: experienceData.end,
      setter: (value) => updateExperienceData("end", value),
    },
    {
      name: "Location",
      label: "location",
      value: experienceData.location,
      setter: (value) => updateExperienceData("location", value),
    },
    {
      name: "Description",
      label: "Description",
      value: experienceData.description,
      setter: (value) => updateExperienceData("description", value),
    },
  ];

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const deleteData = () => {
    const newData = ExperienceDatas.map(({ label, setter }) => ({
      label,
      value: "",
      setter,
    }));

    // Update the education data using the new array
    newData.forEach(({ label, value }) => {
      updateExperienceData(label.toLowerCase(), value);
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const hiddenData = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent formOpenToggle from being triggered
    setEyeOpen(!eyeOpen);
    setHiddenExperience(!hiddenExperience);
    setFormOpen(false);
  };

  const formOpenToggle = () => {
    setFormOpen(!formOpen);
  };

  const experienceToggle = () => {
    setOpen(!open);
    setFormOpen(false);
  };

  return (
    <div className="p-8 relative max-w-lg">
      <div
        onClick={experienceToggle}
        tabIndex={0}
        role="button"
        className="w-full flex justify-between items-center bg-[#585454] rounded-lg p-4 py-6 text-white relative"
      >
        <div>
          <MdWork className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />
          <p className="text-2xl font-bold ml-14 uppercase">Experience</p>
        </div>

        <motion.span
          animate={open ? "open" : "closed"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
        >
          <FiChevronDown />
        </motion.span>
      </div>

      <motion.div
        onClick={formOpenToggle}
        initial={{ scaleY: 0 }}
        animate={open ? "open" : "closed"}
        variants={{
          open: { scaleY: 1 },
          closed: { scaleY: 0 },
        }}
        style={{ originY: "top" }}
        className={`${
          open ? "block" : "hidden"
        } flex items-center justify-between my-2 space-y-4 w-[450px] p-4 bg-white shadow-lg rounded-md`}
      >
        <p className="font-bold text-black/80">{experienceData.company}</p>
        <div onClick={hiddenData}>
          {eyeOpen ? (
            <BsEyeSlashFill className="text-2xl cursor-pointer" />
          ) : (
            <IoEyeSharp className="text-2xl cursor-pointer" />
          )}
        </div>
      </motion.div>

      {formOpen && (
        <motion.form
          initial={{ scaleY: 0 }}
          animate={open ? "open" : "closed"}
          variants={{
            open: { scaleY: 1 },
            closed: { scaleY: 0 },
          }}
          style={{ originY: "top" }}
          className={`${
            open ? "block" : "hidden"
          } space-y-4 w-[450px] p-4 bg-white shadow-lg rounded-md`}
        >
          {ExperienceDatas.map(({ name, label, value, setter }) => (
            <div key={label} className="flex flex-col gap-1">
              <label htmlFor={label} className="font-semibold text-black/80">
                {name}
              </label>
              <input
                type="text"
                name={label}
                value={value}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="input w-full border border-[#ccc] input-bordered bg-[#f3f4f6] text-black/70"
                onChange={handleInputChange(setter)}
              />
            </div>
          ))}

          <div className="flex items-center justify-between">
            <button
              onClick={deleteData}
              type="button"
              className="w-20 h-9 border rounded-md border-zinc-600 text-zinc-600"
            >
              Delete
            </button>
            <button
              onClick={saveData}
              className="w-20 h-9 border rounded-md border-[#187ff5] bg-[#187ff5] text-white"
            >
              Save
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default ExperienceForm;
