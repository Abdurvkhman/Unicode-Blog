import "./main-content.css";
import The from "./main-img/THE.png";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showCategory } from "../../reducers/categoriesReducer";
import { useEffect } from "react";
import ReadMore from "./ReadMore";

const MainContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCategory());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories);
  const isLoading = useSelector((state) => state.isLoading);
  const posts = useSelector((state) => state.posts);
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
        <h1 className="main-title">Unicode</h1>
      </div>
      <div className="nav">
        <div className="main-nav">
          <Link to={`/bootcamp/${categories?.[0]._id}`} className="main-link">
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
      <div className="posts-image-block">
        {posts?.slice(0, 3).map((post) => (
          <div className="posts-img" key={post._id}>
            <img id={`id_${post._id}`} src={post.image} alt="error" />
            <p id={`id${post._id}`} className="posts-title">
              {post.title}
            </p>
            <p id={`id__${post._id}`} className="posts-first-title">
              {post.text}
            </p>
          </div>
        ))}
      </div>
      <div className="main-line"></div>
      <h2 className="posts-h2-title">Последние новости в мире IT</h2>
      <div className="posts-second-image-block">
        <div className="posts-second-image-block-first-img-block">
          <img src={posts?.[3].image} alt="error" />
          <p className="posts-second-block-first-title">{posts?.[3].title}</p>
          <ReadMore len="30">{posts?.[3].text}</ReadMore>
        </div>
        <div className="posts-second-block">
          <img src={posts?.[4].image} alt="error" />
          <p className="posts-second-block-second-title">{posts?.[4].title}</p>
          <ReadMore len="30">{posts?.[4].text}</ReadMore>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
