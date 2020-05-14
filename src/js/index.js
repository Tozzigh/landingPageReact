//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { MyCard } from "./component/myCard";
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Footer } from "./component/footer";
//render your react application
const arrayContenido = [
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
];
const arrayCards = arrayContenido.map(testo => MyCard(testo));
MyCard.propTypes = {
	testo: PropTypes.string
};

const cardCards = <div className="row text-center">{arrayCards}</div>;
const cardContainer = (
	<div className="container">{[Jumbotron(), cardCards]}</div>
);

ReactDOM.render(
	<div>
		{Navbar()}, {cardContainer}, {Footer()}
	</div>,
	document.body
);
