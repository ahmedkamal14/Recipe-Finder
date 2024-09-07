import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CravingCard = ({ name, img, id }) => {
  return (
    <Link to={`/Recipe-Finder/singlerecipe/${id}`}>
      <div className="flex flex-col w-full min-w-[250px] text-center border border-white/19 rounded-[15px] justify-between p-5 transition transform hover:scale-105">
        <img
          src={img}
          alt={name}
          className="w-full h-[250px] object-cover rounded-t-[15px]"
        />
        <h2 className="text-[18px] lg:text-[22px] font-semibold mt-4">
          {name}
        </h2>
      </div>
    </Link>
  );
};

CravingCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default CravingCard;
