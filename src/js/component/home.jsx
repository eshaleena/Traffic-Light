import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState('');

	return (

	  <div className="traffic-light">
		<div className={`light red ${selectedColor === 'red' ? 'glow' : ''}`}
		onClick={() => setSelectedColor("red")}></div>

		<div className={`light yellow ${selectedColor === 'yellow' ? 'glow' : ''}`}
		onClick={() => setSelectedColor("yellow")}></div>

		<div className={`light green ${selectedColor === 'green' ? 'glow' : ''}`}
		onClick={() => setSelectedColor("green")}></div>
	  </div>
	);
  }

  export default Home;
