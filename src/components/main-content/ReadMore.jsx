import { useState } from "react";
import "./main-content.css";

const ReadMore = ({ children, len }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const readMoreBtn = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <span>{isReadMore ? children : `${children.substring(0, len)}...`}</span>
      <div>
        <p onClick={readMoreBtn} className="read-more">
          {isReadMore ? "read less" : "read more..."}
        </p>
      </div>
    </>
  );
};

export default ReadMore;
