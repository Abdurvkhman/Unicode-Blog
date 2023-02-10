import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./recomendation.css";

const Recomendation = () => {
  const posts = useSelector((state) => state.posts);
  if (!posts) {
    return <p>error</p>;
  }
  return (
    <>
      <h2 className="recomendation-title">Рекомендуем к прочтению</h2>
      <div className="recomendation-block">
        {posts.slice(0, 6).map((recomendation) => (
          <div className="recomendation-map-block">
            <Link to={`/posts/category/:${recomendation._id}`}>
              <img src={recomendation.image} alt="error" />
            </Link>
            <h2>{recomendation.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recomendation;
