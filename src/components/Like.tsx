import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return status ? (
    <FaHeart color="#ff6b81" size={25} onClick={toggle} />
  ) : (
    <FaRegHeart size={25} onClick={toggle} />
  );
};

export default Like;
