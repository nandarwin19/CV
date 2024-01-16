import Education from "./Education/Education";
import Experience from "./Experiences/Experience";
import Skills from "./Skills/Skills";

const Info = () => {
  return (
    <div className="p-8">
      <Education />
      <Skills />
      <Experience />
    </div>
  );
};

export default Info;
