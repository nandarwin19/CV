import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import EducationForm from "./components/Education/EducationForm";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experiences/Experience";
import {
  initialEducation,
  initialExperience,
  initialUserData,
} from "./components/constant/constant";
import ExperienceForm from "./components/Experiences/ExperienceForm";

function App() {
  const [personalData, setPersonalData] = useState(initialUserData);
  const [educationData, setEducationData] = useState(initialEducation);
  const [hiddenEducation, setHiddenEducation] = useState(true);
  const [hiddenExperience, setHiddenExperience] = useState(true);
  const [experienceData, setExperienceData] = useState(initialExperience);

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
    setEducationData((prevData) => ({
      ...prevData,
      [data]: value,
    }));
  };

  const updateExperienceData = (data, value) => {
    setExperienceData((prevData) => ({
      ...prevData,
      [data]: value,
    }));
  };

  useEffect(() => {
    console.log(experienceData);
  }, []);

  return (
    <div className="flex bg-[#F0f0f0]">
      <div className="p-8 w-1/2">
        <div className="shadow-2xl max-w-xl">
          <PersonalDetailsForm
            updatePersonalData={updatePersonalData}
            personalData={personalData}
          />
          <EducationForm
            updateEducationData={updateEducationData}
            educationData={educationData}
            setHiddenEducation={setHiddenEducation}
            hiddenEducation={hiddenEducation}
          />

          <ExperienceForm
            experienceData={experienceData}
            updateExperienceData={updateExperienceData}
            hiddenExperience={hiddenExperience}
            setHiddenExperience={setHiddenExperience}
          />
        </div>
      </div>

      <div className="p-8 w-1/2">
        <div className="shadow-2xl overflow-hidden">
          <Header personalData={personalData} />
          <div className="p-8">
            {hiddenEducation && <Education educationData={educationData} />}
            {hiddenExperience && <Experience experienceData={experienceData} />}
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
