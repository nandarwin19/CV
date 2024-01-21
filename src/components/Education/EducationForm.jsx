import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

const EducationForm = ({
  newEducation,
  updateEducationData,
  addEducationEntry,
  educationData,
  setEducationData,
}) => {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const EducationDatas = [
    {
      label: "School/College",
      value: newEducation.school,
      setter: (value) => updateEducationData("school", value),
    },
    {
      label: "Degree",
      value: newEducation.degree,
      setter: (value) => updateEducationData("degree", value),
    },
    {
      label: "Start Date",
      value: newEducation.start,
      setter: (value) => updateEducationData("start", value),
    },
    {
      label: "End Date",
      value: newEducation.end,
      setter: (value) => updateEducationData("end", value),
    },
  ];

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const deleteData = () => {
    EducationDatas.forEach(({ setter }) => {
      setter("");
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    addEducationEntry();
    setOpen(false);
  };

  const hiddenData = (e, dataIndex) => {
    e.stopPropagation();
    setEducationData((prevEducationData) => {
      const updatedEducationData = [...prevEducationData];
      updatedEducationData[dataIndex] = {
        ...updatedEducationData[dataIndex],
        hidden: !updatedEducationData[dataIndex].hidden,
      };
      return updatedEducationData;
    });
  };

  const formOpenToggle = () => {
    setFormOpen(!formOpen);
  };

  const educationToggle = () => {
    setOpen(!open);
    setFormOpen(false);
  };

  return (
    <div className="p-8 pb-4 relative w-full">
      <div
        tabIndex={0}
        onClick={educationToggle}
        role="button"
        className="w-full flex justify-between items-center bg-[#585454] rounded-lg p-4 md:py-6 text-white relative"
      >
        <div className="flex items-center">
          <GiGraduateCap className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />
          <p className="text-xl md:text-2xl font-bold ml-14 uppercase">
            Education
          </p>
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

      {educationData.length > 0 &&
        educationData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ scaleY: 0 }}
            animate={open ? "open" : "closed"}
            variants={{
              open: { scaleY: 1 },
              closed: { scaleY: 0 },
            }}
            style={{ originY: "top" }}
            className={`${
              open ? "block" : "hidden"
            } flex items-center justify-between my-2 space-y-4 w-full  p-4 bg-white shadow-lg rounded-md cursor-pointer`}
          >
            <div className="w-full my-1 flex items-center justify-between overflow-x-hidden">
              <p
                style={{ whiteSpace: "normal", overflow: "hidden" }}
                className="mr-4 font-bold text-black/80"
              >
                {data.school}
              </p>
              <div onClick={(e) => hiddenData(e, index)}>
                {data.hidden ? (
                  <BsEyeSlashFill className="text-2xl" />
                ) : (
                  <IoEyeSharp className="text-2xl" />
                )}
              </div>
            </div>
          </motion.div>
        ))}

      {open && !formOpen && (
        <motion.button
          initial={{ scaleY: 0 }}
          animate={open ? "open" : "closed"}
          variants={{
            open: { scaleY: 1 },
            closed: { scaleY: 0 },
          }}
          style={{ originY: "top" }}
          onClick={formOpenToggle}
          className={`${
            open ? "block" : "hidden"
          }  flex items-center justify-center my-2 space-y-4 w-full  p-4 bg-white shadow-lg rounded-md cursor-pointer`}
        >
          + Education
        </motion.button>
      )}

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
          } space-y-4 w-full  p-4 bg-white shadow-lg rounded-md`}
        >
          {EducationDatas.map(({ label, value, setter }) => (
            <div key={label} className="flex flex-col gap-1">
              <label htmlFor={label} className="font-semibold text-black/80">
                {label}
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

export default EducationForm;
