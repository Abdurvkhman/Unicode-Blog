import "./about.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showCategory } from "../../reducers/categoriesReducer";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import The from "../../components/main-content/main-img/THE.png";

const About = () => {
  const path = window.location.pathname.substring(17);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCategory());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories);
  const isLoading = useSelector((state) => state.isLoading);
  const posts = useSelector((state) => state.posts);
  const catId = posts?.find((i) => (i?._id === path ? i._id : ""));
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
            className={`${catId ? "underline" : "main-link"}`}
          >
            {categories?.[0].title}
          </Link>
          <Link
            to={`/newsIT/${categories?.[1]._id}`}
            className={`${catId === path ? "underline" : "main-link"}`}
          >
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
      <img className="about-img" src={catId.image} alt="error" />
      <h2 className="about-title">{catId.title}</h2>
      <p className="about-text">{catId.text}</p>
    </div>
  );
};

export default About;
