import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios"


var images = [];
const GenerateGame = () => {
  for (var x = 0; x < 9; x++) {
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        var image = response.data.message
        images.push(image)
        console.log(images)
      })
    
  }
}

GenerateGame();

const Home = () => (
  <div className="jumbotron">
    <h1>Home Page</h1>
    <div className="container">

      <div className="row" id="row1">
        <div className="col-md-4">
          <img src = {images[0]} />
        </div>
        <div className="col-md-4">
        <img src = {images[1]}/>
        </div>
        <div className="col-md-4">
        <img src = {images[2]}/>
        </div>
      </div>

      <div className="row" id="row2">
        <div className="col-md-4">
        <img src = {images[3]}/>
        </div><div className="col-md-4">
        <img src = {images[4]}/>
        </div><div className="col-md-4">
        <img src = {images[5]}/>
        </div>
      </div>
      <div className="row" id="row3">
        <div className="col-md-4">
        <img src = {images[6]}/>
        </div><div className="col-md-4">
        <img src = {images[7]}/>
        </div><div className="col-md-4">
        <img src = {images[8]}/>
        </div>
      </div>

    </div>
  </div>
);

export default Home;
