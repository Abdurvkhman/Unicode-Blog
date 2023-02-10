import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContent from "./components/main-content/MainContent";
import Bootcamp from "./pages/bootcamp/Bootcamp";
import NewsIT from "./pages/NewsIT";
import ProjectOfStudents from "./pages/ProjectsOFStudents";
import About from "./pages/about/About";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/bootcamp/:id" element={<Bootcamp />} />
        <Route path="/newsIT/:id" element={<NewsIT />} />
        <Route path="/projectsOfStudents/:id" element={<ProjectOfStudents />} />
        <Route path="/posts/category/:categoryId" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
