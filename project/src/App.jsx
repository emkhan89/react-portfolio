import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
// import ChallengesCard from "./components/ChallengesCard/index";
// import challenges from "./challenges.json";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";

import friends from "./friends.json";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <h3 id="work">
        <b>Work</b>
      </h3>
      <Wrapper>
        <FriendCard
          name={friends[0].name}
          image={friends[0].image}
          description={friends[0].description}
          location={friends[0].location}
        />
        <FriendCard
          name={friends[1].name}
          image={friends[1].image}
          description={friends[1].description}
          location={friends[1].location}
        />
        <FriendCard
          name={friends[2].name}
          image={friends[2].image}
          description={friends[2].description}
          location={friends[2].location}
        />
      </Wrapper>

      <Footer />
    </div>
  );
}

export default App;
