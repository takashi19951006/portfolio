import React, { useEffect } from "react";
import { projects } from "@/constants/projects";

export default function ProjectFilter({
  activeCategory,
  setActiveCategory,
  setFiltered,
}) {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }
    const filterd = projects.filter((project) =>
      project.category.includes(activeCategory)
    );
    setFiltered(filterd);
  }, [activeCategory, setFiltered]);
  return (
    <div>
      <button
        className={
          activeCategory == "all"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg m-3"
            : "m-3"
        }
        onClick={() => setActiveCategory("all")}
      >
        全て
      </button>
      <button
        className={
          activeCategory == "5以下"
            ? "bg-darkblue py-1 px-3 rounded-lg text-white m-3"
            : "m-3"
        }
        onClick={() => setActiveCategory("5以下")}
      >
        5以下
      </button>
      <button
        className={
          activeCategory == "5以上"
            ? "bg-darkblue py-1 px-3 rounded-lg text-white m-3"
            : "m-3"
        }
        onClick={() => setActiveCategory("5以上")}
      >
        5以上
      </button>
    </div>
  );
}
