import React from "react";
import Navbar from "../../Navbar";

function Projects() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <ProjectsCard
          name={projects[0].name}
          image={projects[0].image}
          description={projects[0].description}
          location={projects[0].location}
        />{" "}
        <ProjectsCard
          name={projects[1].name}
          image={projects[1].image}
          description={projects[1].description}
          location={projects[1].location}
        />{" "}
        <ProjectsCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          location={projects[2].location}
        />{" "}
        <ProjectsCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          location={projects[2].location}
        />{" "}
        <ProjectsCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          location={projects[2].location}
        />{" "}
        <ProjectsCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          location={projects[2].location}
        />{" "}
      </Wrapper>
    </>
  );
}

export default Projects;
