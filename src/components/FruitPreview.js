import { useNavigate } from "react-router-dom";
import "./FruitPreview.css";

function FruitPreview({ fruit }) {
  const navigate = useNavigate();

  function onClick() {
    console.log(fruit.name);
    navigate("/fruits/" + fruit.name.toLowerCase());
  }

  function getImage() {
    return "/images/" + fruit.name.toLowerCase() + ".png";
  }

  return (
    <div className={"FruitPreview " + fruit.name.toLowerCase()}>
      <img alt={fruit.name} src={getImage()} />
      <button className={"Button " + fruit.name.toLowerCase()} onClick={() => onClick()}>{fruit.name}</button>
    </div>
  );
}

export default FruitPreview;

