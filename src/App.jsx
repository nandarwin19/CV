import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Info from "./components/Info";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import ExperienceForm from "./components/Experiences/ExperienceForm";

const initialUserData = {
  name: "Nay Yar",
  email: "test@gmail.com",
  phone: "09995454678",
  address: "Mandalay, Myanmar",
  career: "Front-end Developer",
};

function App() {
  // Assume initialUserData is an object representing your initial state.
  const [personalData, setPersonalData] = useState(initialUserData);

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

  return (
    <div className="flex bg-[#F0f0f0]">
      <div className="p-8 w-1/2">
        <div className="shadow-2xl max-w-xl">
          <PersonalDetailsForm
            updatePersonalData={updatePersonalData}
            personalData={personalData}
          />
          <ExperienceForm />
          <ExperienceForm />
        </div>
      </div>
      <div className="p-8 w-1/2">
        <div className="shadow-2xl overflow-hidden">
          <Header personalData={personalData} />
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
