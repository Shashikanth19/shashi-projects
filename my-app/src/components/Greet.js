import React from "react";

const Greet = ({ name, heroName}) => {
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  );
}

// const SecondGreet = () => <h1>How are you!</h1>

export default Greet;
