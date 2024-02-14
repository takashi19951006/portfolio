"use client";
import ProjectCard from "@/components/ProjectCard";
import { AiFillBulb } from "react-icons/ai";
import { useState } from "react";
import ProjectFilter from "@/components/ProjectFilter";
import { AnimatePresence } from "framer-motion";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const load_more_projects = () => {
    setVisibleProjects(100);
  };

  return (
    <section
      className="w-full bg-white h-fit px-[40px] py-[10px] max-xs:px-[20px] relative"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/*セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            開発実績
          </p>
        </div>
        <p>開発実績は準備中です。フィルター機能の練習用に作っただけで、何の意味もありません。</p>
        {/*フィルター */}
        <p>
          {filtered.map((project) => {
            project.name;
          })}
        </p>
        <ProjectFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setFiltered={setFiltered}
        />
        {/*カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </AnimatePresence>
        </div>
        {/*もっと見る */}
        {visibleProjects !== 100 ? (
          <div className="text-center mt-4 ">
            <button
              className="bg-cadetblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75"
              onClick={load_more_projects}
            >
              もっとみる
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Projects;
