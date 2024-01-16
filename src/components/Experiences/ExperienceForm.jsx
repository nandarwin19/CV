import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const ExperienceForm = () => {
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    // Handle input changes here
  };

  return (
    <div className="p-8 relative max-w-lg">
      <div
        tabIndex={0}
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        className="w-full flex justify-between items-center bg-[#585454] rounded-lg p-4 py-6 text-white relative"
      >
        <div>
          <GiGraduateCap className="w-10 h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />
          <p className="text-2xl font-bold ml-14 uppercase">Education</p>
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
        {/* Input fields */}
        {[
          { label: "School", name: "school" },
          { label: "Degree", name: "degree" },
          { label: "Start Date", name: "startdate" },
          { label: "End Date", name: "endDate" },
          { label: "Location", name: "location" },
        ].map(({ label, name }) => (
          <div key={label} className="flex flex-col gap-1">
            <label htmlFor={name} className="font-semibold text-black/80">
              {label}
            </label>
            <input
              type="text"
              name={name}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="input w-full border border-[#ccc] input-bordered bg-[#f3f4f6]"
              onChange={handleInputChange}
            />
          </div>
        ))}

        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <button className="w-20 h-9 border rounded-md border-zinc-600 text-zinc-600">
            Delete
          </button>
          <button className="w-20 h-9 border rounded-md border-[#187ff5] bg-[#187ff5] text-white">
            Save
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ExperienceForm;
