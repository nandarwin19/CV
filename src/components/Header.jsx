import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Header = ({ personalData }) => {
  const { name, career, email, phone, address } = personalData;
  console.log(name);

  return (
    <div className="bg-[#2a2929] p-8 text-white">
      <div className="text-center flex flex-col gap-2 mb-2">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl">{career}</p>
      </div>
      <div className="flex items-center justify-center text-lg">
        {email && (
          <div className="flex flex-row items-center mr-8 gap-1 justify-center">
            <MdEmail />
            <p>{email}</p>
          </div>
        )}
        {phone && (
          <div className="flex flex-row items-center mr-8 gap-1 justify-center">
            <FaPhoneAlt />
            <p>{phone}</p>
          </div>
        )}
        {address && (
          <div className="flex flex-row items-center mr-8 gap-1 justify-center">
            <FaLocationDot />
            <p>{address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
