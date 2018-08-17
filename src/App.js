import React, { Component } from "react";

import Title from "./components/title";
import Wrapper from "./components/wrapper";
import Container from "./components/container";
import Menu from "./components/menu"
// import Title from "./components/Title"
import tiles from "./tiles.json";


function rearrange(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const messageArray = [
  {
      "msg": "Don't get carried away..."
  },
  {
      "msg": "Your IQ is higher than the average goat."
  },
  {
      "msg": "Chill out dude."
  },
  {
      "msg": "Alright..."
  },
  {
      "msg": "You're good at clicking stuff"
  },
  {
      "msg": "Ahhh you thought that one was ganna screw you up."
  },
  {
      "msg": "You are amazing! At this at least."
  },
  {
      "msg": "Wow, just masterfully done."
  },
  {
      "msg": "I don't get paid to boost your ego."
  }
]

const randomMessage = () => {
  let randomIndex = Math.floor((Math.random() * messageArray.length))
  return messageArray[randomIndex].msg
}




class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      tiles: tiles,
      score: 0,
      highScore: 0,
      clicked: [],
      correct: "If you click an image twice, you lose!"
    }

    
    this.handleClick = this.handleClick.bind(this)
  }

  checkScore = score => {
    if(score > this.state.highScore)  {
      return score
    } else  {
      return this.state.highScore
    }
  }

  handleClick = id => {
    let score = this.state.score
    let newtiles =rearrange(tiles)
    let message = randomMessage()
    if(this.state.score === 11) {
      this.setState({
        tiles: newtiles,
        score: 0,
        clicked: [],
        highScore: 12,
        correct: "Now go get a job!"
      })
    } else {
      if(this.state.clicked.indexOf(id) === -1) {
        let clicked = this.state.clicked.concat(id)
        this.setState({
          tiles: newtiles,
          score: score += 1,
          clicked: clicked,
          highScore: this.checkScore(score),
          correct: message
        })
        console.log(this.state)
      } else  {
        this.setState({
          tiles: newtiles,
          score: 0,
          clicked: [],
          highScore: this.checkScore(score),
          correct: "You peaked in high school. (Yes you lost)"
        })
      }
      console.log(this.state)
    }
  }

  
  render() {
    return (
      <div>
      <Title>
        </Title>
      <Menu score={this.state.score} highScore={this.state.highScore} correct={this.state.correct}/>
      <Container>
        <Wrapper 
          data={tiles}
          onClick={this.handleClick}
        />
      </Container>
      </div>
    );
  }
}

export default App;
