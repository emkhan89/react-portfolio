import React from "react";
import Navbar from "../../components/Navbar";
import challenges from "./projectsData.json";

function Projects() {
  return (
    <>
      <Navbar />
      {/* <Wrapper>
        <ProjectsCard
          name={projectsData[0].name}
          image={projectsData[0].image}
          description={projectsData[0].description}
          location={projectsData[0].location}
        />{" "} */}
        {/* <ProjectsCard
          name={challenges[1].name}
          image={challenges[1].image}
          description={challenges[1].description}
          location={challenges[1].location}
        />{" "}
        <ProjectsCard
          name={challenges[2].name}
          image={challenges[2].image}
          description={challenges[2].description}
          location={challenges[2].location}
        />{" "}
        <ProjectsCard
          name={challenges[2].name}
          image={challenges[2].image}
          description={challenges[2].description}
          location={challenges[2].location}
        />{" "}
        <ProjectsCard
          name={challenges[2].name}
          image={challenges[2].image}
          description={challenges[2].description}
          location={challenges[2].location}
        />{" "}
        <ProjectsCard
          name={challenges[2].name}
          image={challenges[2].image}
          description={challenges[2].description}
          location={challenges[2].location}
        />{" "} */}
      </Wrapper>
    </>
  );
}

export default Projects;
