import Card1 from "../../components/App/Cards/Card1";
import Card2 from "../../components/App/Cards/Card2";
import Card3 from "../../components/App/Cards/Card3";
import Card4 from "../../components/App/Cards/Card4";
import Card5 from "../../components/App/Cards/Card5";
import Card6 from "../../components/App/Cards/Card6";
import Card7 from "../../components/App/Cards/Card7";
import Card8 from "../../components/App/Cards/Card8";

const Card = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      {/* Defualt Card */}
      <Card1 />
      {/* Card with Button */}
      <Card2 />
      {/* Card with image */}
      <Card3 />
      {/* Pricing Card */}
      <Card4 />
      {/* Gradient Card */}
      <Card5 />
      {/* Hover Effect Card */}
      <Card6 />
      {/* Horizontal Card */}
      <Card7 />
      {/* Card Grid */}
      <Card8/>
    </div>
  );
};

export default Card;
