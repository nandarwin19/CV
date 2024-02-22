import PropTypes from "prop-types";

const Card = ({ data, checkingNames, flip }) => {
  return (
    <div
      onClick={() => checkingNames(data.name)}
      className={`hover:scale-105 duration-300 ease-in-out cursor-pointer bg-[#e2e5de] w-40 h-52 tablet:w-[280px] tablet:h-[350px] text-[#121212] border border-gray-300 rounded-md shadow-2xl ${
        flip ? "flip" : ""
      }`}
    >
      <img
        src={data?.sprites?.other?.dream_world?.front_default}
        alt={data.name}
        className="w-full h-[87%] object-center"
      />
      <p className="text-center my-1 text-sm tablet:text-xl font-bold">
        {data.name}
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkingNames: PropTypes.func,
  flip: PropTypes.bool,
};

export default Card;