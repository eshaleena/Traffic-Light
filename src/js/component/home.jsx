import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="traffic-light">
             <div className="light red">a</div>
             <div className="light yellow">b</div>
             <div className="light green">c</div>


		</div>
	);
};

export default Home;
