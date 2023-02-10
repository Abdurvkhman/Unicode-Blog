import "./bootcamp.css";
import The from "../../components/main-content/main-img/THE.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";
import { showCategory } from "../../reducers/categoriesReducer";
import { useEffect } from "react";
import ReadMore from "../../components/main-content/ReadMore";
import Recomendation from "../../components/recomendation/Recomendation";

const Bootcamp = () => {
  const categories = useSelector((state) => state.categories);
  const isLoading = useSelector((state) => state.isLoading);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCategory());
  }, [dispatch]);

  if (isLoading || !posts) {
    return (
      <div className="dnk">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  return (
    <div className="main">
      <div className="main-header">
        <div>
          <img src={The} alt="error" className="main-img" />
        </div>
        <Link className="unicode-link" to="/">
          <h1 className="main-title">Unicode</h1>
        </Link>
      </div>
      <div className="nav">
        <div className="main-nav">
          <Link
            to={`/bootcamp/${categories?.[0]._id}`}
            className={`${categories[0] ? "underline" : "main-link"}`}
          >
            {categories?.[0].title}
          </Link>
          <Link to={`/newsIT/${categories?.[1]._id}`} className="main-link">
            {categories?.[1].title}
          </Link>
          <Link
            to={`/projectsOfStudents/${categories?.[2]._id}`}
            className="main-link"
          >
            {categories?.[2].title}
          </Link>
        </div>
      </div>
      <div className="main-line"></div>
      <div className="bootcamp">
        <div className="bootcamp-first-block">
          <h2 className="bootcamp-title">{categories?.[0].title}</h2>
          {posts?.map((bootcamp) => (
            <>
              <div className="bootcamp-map-block" key={bootcamp._id}>
                <Link to={`/posts/category/:${bootcamp._id}`}>
                  <img src={bootcamp.image} alt="error" />
                </Link>
                <div className="bootcamp-map-block-text">
                  <h2 className="map-block-p">{bootcamp.title}</h2>
                  <ReadMore len="30">{bootcamp.text}</ReadMore>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
        <div className="bootcamp-second-block">
          <h2 className="bootcamp-second-block-title">
            Рекомендуем к прочтению
          </h2>
          <Link to={`/posts/category/:${posts?.[7]._id}`}>
            <img src={posts?.[7].image} alt="error" />
          </Link>
          <h2 className="bootcamp-second-block-second-title">
            {posts?.[7].title}
          </h2>
          <ReadMore len="200">{posts?.[7].text}</ReadMore>
          <hr />
          <Link to={`/posts/category/:${posts?.[3]._id}`}>
            <img src={posts?.[3].image} alt="error" />
          </Link>
          <h2 className="bootcamp-second-block-second-title">
            {posts?.[3].title}
          </h2>
          <ReadMore len="200">{posts?.[3].text}</ReadMore>
          <hr />
        </div>
      </div>
      <Recomendation />
    </div>
  );
};

export default Bootcamp;
