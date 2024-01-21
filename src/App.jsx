import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import EducationForm from "./components/Education/EducationForm";
import Education from "./components/Education/Education";
import Experience from "./components/Experiences/Experience";
import {
  initialEducation,
  initialExperience,
  initialUserData,
} from "./components/constant/constant";
import ExperienceForm from "./components/Experiences/ExperienceForm";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";

function App() {
  const [personalData, setPersonalData] = useState(initialUserData);

  // For education
  const [educationData, setEducationData] = useState([]);
  const [newEducation, setNewEducation] = useState(initialEducation);

  const [experienceData, setExperienceData] = useState([]);
  const [newExperience, setNewExperience] = useState(initialExperience);

  // updatePersonalData is a function that takes two arguments:
  // `data` is the key of the personalData object we want to update.
  // `value` is the new value we want to set for this key.
  const updatePersonalData = (data, value) => {
    // setPersonalData is called with a function (prevState => ...), which guarantees
    // we have the correct previous state even if there are multiple updates
    // in quick succession (React guarantees this will be accurate).
    setPersonalData((prevData) => ({
      ...prevData, // Spread the previous data to retain existing key-value pairs.
      [data]: value, // Update the key specified by 'data' with the new 'value'.
    }));
  };

  const updateEducationData = (data, value) => {
    setNewEducation((prevData) => ({
      ...prevData,
      [data]: value,
    }));
  };

  const updateExperienceData = (data, value) => {
    setNewExperience((prevData) => ({
      ...prevData,
      [data]: value,
    }));
  };

  const addEducationEntry = () => {
    setEducationData((prevData) => [...prevData, newEducation]);
    setNewEducation(initialEducation);
  };

  const addExperienceEntry = () => {
    setExperienceData((prevData) => [...prevData, newExperience]);
    setNewExperience(initialEducation);
  };

  useEffect(() => {
    console.log(experienceData);
  }, [addExperienceEntry]);

  return (
    <div className="flex md:flex-row flex-col bg-[#F0f0f0]">
      <div className="p-8 pb-12 w-full 2xl:w-1/2">
        <div className="shadow-2xl max-w-xl max-auto">
          <PersonalDetailsForm
            updatePersonalData={updatePersonalData}
            personalData={personalData}
          />
          <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
            setNewEducation={setNewEducation}
            newEducation={newEducation}
            updateEducationData={updateEducationData}
            addEducationEntry={addEducationEntry}
          />

          <ExperienceForm
            experienceData={experienceData}
            setExperienceData={setExperienceData}
            setNewExperience={setNewExperience}
            newExperience={newExperience}
            updateExperienceData={updateExperienceData}
            addExperienceEntry={addExperienceEntry}
          />
        </div>
      </div>

      <div className="p-8 w-full 2xl:w-1/2">
        <div className="shadow-2xl overflow-hidden">
          <div className="bg-[#2a2929] p-8 text-white">
            <Header personalData={personalData} />
          </div>
          <div className="p-8">
            {educationData && educationData.length > 0 && (
              <>
                <div className="w-full bg-[#585454] p-2  text-white relative flex items-center">
                  <GiGraduateCap className="w-9 h-9 md:w-10 md:h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />
                  <p className="text-xl md:text-2xl font-bold ml-14 uppercase">
                    Education
                  </p>
                </div>
                {educationData.map((data, index) => (
                  <Education key={index} edata={data} />
                ))}
              </>
            )}

            {experienceData && experienceData.length > 0 && (
              <>
                <div className=" w-full  bg-[#585454] p-2 text-white relative flex items-center">
                  <MdWork className="w-9 h-9 md:w-10 md:h-10 border border-[#474444] rounded-full p-2 absolute bg-white text-[#474444]" />

                  <p className="text-xl md:text-2xl font-bold ml-14 uppercase">
                    Work Experiences
                  </p>
                </div>
                {experienceData.map((data, index) => (
                  <Experience key={index} edata={data} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
