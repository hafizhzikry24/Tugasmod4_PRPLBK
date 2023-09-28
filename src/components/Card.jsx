import React, { useState } from "react";
import "../App.css";
import Button from "../elements/button";
import TextInput from "../elements/TextInput";

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

export default function Card() {
  const [searchTerm, setSearchTerm] = useState("");

  const cardsData = [
    {
      nim: "21120120120019",
      nama: "Adivia Khusnul Aisha",
      profile: "https://avatars.githubusercontent.com/u/82595554?v=4",
      email: "adiviakaa@gmail.com",
      github: "https://github.com/mdiph",
    },
    {
      nim: "21120120140158",
      nama: "Faizal Lutfi Yoga Triadi",
      profile: "https://avatars.githubusercontent.com/u/42670670?v=4",
      email: "faizal2jz@gmail.com",
      github: "https://github.com/mdiph",
    },
    {
      nim: "21120120140054",
      nama: "Muhammad Dhiva Pradigta",
      profile: "https://avatars.githubusercontent.com/u/82644062?v=4",
      email: "dhivapradigta96@gmail.com",
      github: "https://github.com/mdiph",
    },
    {
      nim: "21120120120034",
      nama: "Muhammad Hafizh Zikry",
      profile: "https://avatars.githubusercontent.com/u/81897441?v=4",
      email: "hafizhcool24@gmail.com",
      github: "https://github.com/mdiph",
    },
  ];

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter daftar komponen Square berdasarkan kata kunci pencarian
  const filteredCards = cardsData.filter((card) =>
    card.nama.toLowerCase().includes(searchTerm.toLowerCase()) || card.nim.includes(searchTerm) ||
    card.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="User-cards">
      
      <div className="User-info">
        {filteredCards.map((card, index) => (
          <Square
            key={index}
            nim={card.nim}
            nama={card.nama}
            profile={card.profile}
            email={card.email}
            github={card.github}
          />
        ))}
      </div>

      <form action="" >
          <TextInput
            border="aquamarine"
            placeholder="Nama"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
    </div>
  );
}
