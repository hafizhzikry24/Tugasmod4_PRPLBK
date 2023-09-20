import React, { Component } from "react";
import "../App.css";
import Button from "../elements/button";

function Square(props) {
  return (
    <div className="cards">
      <div>
        <img src={props.profile} alt="profile picture" className="avatar" />
        <h2>{props.nama}</h2>
        <p>{props.nim}</p>
        <p>{props.email}</p>
      </div>
      <a href={props.github} target="_blank">
        <Button background="darkblue" type="submit">
          Github
        </Button>
      </a>
    </div>
  );
}
export default class Card extends Component {
  render() {
    const bgColor = {
      backgroundColor: this.props.bgColor,
    };
    return (
      <div className="User-cards">
        <div className="User-info" style={bgColor}>
          <Square
            nim="21120120120019"
            nama="Adivia Khusnul Aisha"
            profile="https://avatars.githubusercontent.com/u/82595554?v=4"
            email="adiviakaa@gmail.com"
            github="https://github.com/mdiph"
          />
          <Square
            nim="21120120140158"
            nama="Faizal Lutfi Yoga Triadi"
            profile="https://avatars.githubusercontent.com/u/42670670?v=4"
            email="faizal2jz@gmail.com"
            github="https://github.com/mdiph"
          />
          <Square
            nim="21120120140054"
            nama="Muhammad Dhiva Pradigta"
            profile="https://avatars.githubusercontent.com/u/82644062?v=4"
            email="dhivapradigta96@gmail.com"
            github="https://github.com/mdiph"
          />
          <Square
            nim="21120120120034"
            nama="Muhammad Hafizh Zikry"
            profile="https://avatars.githubusercontent.com/u/81897441?v=4"
            email="hafizhcool24@gmail.com"
            github="https://github.com/mdiph"
          />
        </div>
      </div>
    );
  }
}
