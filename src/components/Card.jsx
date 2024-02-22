import PropTypes from "prop-types";

const Card = ({ data, checkingNames }) => {
  return (
    <div
      onClick={() => checkingNames(data.name)}
      className="cursor-pointer bg-[#e2e5de] w-[280px] h-[350px] text-[#121212] border border-gray-300 rounded-md shadow-2xl"
    >
      <img
        src={data?.sprites?.other?.dream_world?.front_default}
        alt={data}
        className="w-full h-[87%] object-center"
      />
      <p className="text-center my-1 text-xl font-bold">{data.name}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkingNames: PropTypes.func,
};

export default Card;
