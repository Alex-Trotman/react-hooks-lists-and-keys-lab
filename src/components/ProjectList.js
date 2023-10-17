import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectListObjects = projects.map((obj) => {
    return (
      <ProjectItem
        key={obj.name}
        name={obj.name}
        technologies={obj.technologies}
        about={obj.about}
      />
    );
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectListObjects}</div>
    </div>
  );
}

export default ProjectList;
